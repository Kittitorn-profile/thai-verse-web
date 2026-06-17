'use client';

import type { Feature, Geometry, GeoJsonProperties, FeatureCollection } from 'geojson';

import { geoPath, geoMercator } from 'd3-geo';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type ThailandProvince = {
  id?: string;
  name: string;
  iso?: string;
  coordinates?: [number, number];
};

type ThailandProvinceFeature = Feature<Geometry, GeoJsonProperties> & {
  rsmKey?: string;
};

const THAILAND_PROVINCES_GEOJSON_PATH = '/assets/maps/thailand-provinces.geojson';

const MAP_STATUS_COLORS = {
  approved: ['#0d7f08', '#168d0d', '#269b18', '#3cb72b', '#67c64e'],
  rejected: ['#5132d9', '#653cef', '#7d52ff'],
  noScore: ['#7ccb5a'],
};

const MAP_SUMMARY = [
  { label: 'ไม่ประสงค์ลงคะแนน', value: '473,957', color: MAP_STATUS_COLORS.noScore[0] },
  { label: 'ไม่เห็นชอบ', value: '2,024,904', color: MAP_STATUS_COLORS.rejected[1] },
  { label: 'เห็นชอบ', value: '4,412,308', color: MAP_STATUS_COLORS.approved[4] },
];

function rewindGeometry(geometry: any) {
  const reverseRing = (ring: number[][]) => [...ring].reverse();

  if (geometry.type === 'Polygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map(reverseRing),
    };
  }

  if (geometry.type === 'MultiPolygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map((polygon: number[][][]) => polygon.map(reverseRing)),
    };
  }

  return geometry;
}

function rewindGeoJson(geoJson: any) {
  return {
    ...geoJson,
    features: geoJson.features.map((feature: any) => ({
      ...feature,
      geometry: rewindGeometry(feature.geometry),
    })),
  };
}

function getGeometryCenter(geometry: any): [number, number] | undefined {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  function walk(coordinates: any) {
    if (typeof coordinates?.[0] === 'number') {
      const [x, y] = coordinates;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      return;
    }

    coordinates?.forEach(walk);
  }

  walk(geometry.coordinates);

  if (![minX, maxX, minY, maxY].every(Number.isFinite)) {
    return undefined;
  }

  return [(minX + maxX) / 2, (minY + maxY) / 2];
}

const EMPTY_GEOJSON = {
  type: 'FeatureCollection',
  features: [],
} satisfies FeatureCollection;

function getProvinceFromGeography(geo: ThailandProvinceFeature): ThailandProvince {
  const properties = geo.properties ?? {};
  const name = String(properties.shapeName ?? properties.name ?? 'Unknown Province').replace(
    /\s+Province$/,
    ''
  );
  const shapeID = properties.shapeID;
  const shapeISO = properties.shapeISO;

  return {
    name,
    id: typeof shapeID === 'string' ? shapeID : undefined,
    iso: typeof shapeISO === 'string' ? shapeISO : undefined,
    coordinates: getGeometryCenter(geo.geometry),
  };
}

function getProvinceColor(province: ThailandProvince) {
  const source = province.iso ?? province.name;
  const hash = source.split('').reduce((total, char) => total + char.charCodeAt(0), 0);

  if (
    ['TH-80', 'TH-81', 'TH-82', 'TH-83', 'TH-84', 'TH-85', 'TH-86', 'TH-90', 'TH-91'].includes(
      source
    )
  ) {
    return MAP_STATUS_COLORS.rejected[hash % MAP_STATUS_COLORS.rejected.length];
  }

  if (hash % 13 === 0) {
    return MAP_STATUS_COLORS.rejected[hash % MAP_STATUS_COLORS.rejected.length];
  }

  if (hash % 11 === 0) {
    return MAP_STATUS_COLORS.noScore[0];
  }

  return MAP_STATUS_COLORS.approved[hash % MAP_STATUS_COLORS.approved.length];
}

export default function ThailandMap() {
  const theme = useTheme();
  const [mapGeoJson, setMapGeoJson] = useState<FeatureCollection>(EMPTY_GEOJSON);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<ThailandProvince | null>(null);
  const projection = useMemo(
    () => geoMercator().center([101.49, 13.04]).scale(3000).translate([480, 380]),
    []
  );
  const geoPathGenerator = useMemo(() => geoPath(projection), [projection]);
  const selectedMarker = (() => {
    if (!selectedProvince?.coordinates) {
      return null;
    }

    const point = projection(selectedProvince.coordinates);

    return point ? { point, name: selectedProvince.name } : null;
  })();

  const handleSelectProvince = (province: ThailandProvince) => {
    const isSameProvince = province.iso === selectedProvince?.iso;

    setSelectedProvince(isSameProvince ? null : province);
    setSearchQuery(isSameProvince ? '' : province.name);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch(THAILAND_PROVINCES_GEOJSON_PATH, { signal: controller.signal })
      .then((response) => response.json())
      .then((geoJson) => {
        setMapGeoJson(rewindGeoJson(geoJson));
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Failed to load Thailand map GeoJSON', error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 780, md: 1040 },
        // backgroundImage: `
        //   linear-gradient(${alpha(theme.palette.grey[500], 0.12)} 1px, transparent 1px),
        //   linear-gradient(90deg, ${alpha(theme.palette.grey[500], 0.12)} 1px, transparent 1px)
        // `,
        bgcolor: theme.palette.secondary.main,
        backgroundSize: '28px 28px',
      }}
    >
      <Box
        sx={{
          top: { xs: 18, md: 32 },
          right: { xs: 18, md: 44 },
          zIndex: 3,
          width: { xs: 220, sm: 270 },
          height: 44,
          px: 1.4,
          gap: 1,
          display: 'flex',
          borderRadius: 99,
          position: 'absolute',
          alignItems: 'center',
          bgcolor: alpha(theme.palette.common.white, 0.9),
          border: `1px solid ${alpha(theme.palette.grey[600], 0.42)}`,
          boxShadow: `0 12px 30px ${alpha(theme.palette.primary.darker, 0.08)}`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Iconify icon="eva:search-fill" width={21} sx={{ color: theme.palette.grey[800] }} />
        <InputBase
          value={searchQuery}
          placeholder="จังหวัด อำเภอ ตำบล"
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{
            flex: 1,
            minWidth: 0,
            color: theme.palette.grey[900],
            fontSize: 14,
            fontWeight: 600,
            '& input::placeholder': {
              color: theme.palette.grey[500],
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box
        sx={{
          pt: { xs: 8, md: 4 },
          px: { xs: 1, sm: 3, md: 5 },
          pb: { xs: 10, md: 10 },
        }}
      >
        <Box
          sx={{
            width: { xs: 1, md: '86%' },
            maxWidth: 960,
            height: { xs: 660, sm: 820, md: 960 },
            '& svg': {
              width: '100%',
              height: '100%',
              display: 'block',
              outline: 'none',
            },
            '& path': {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              vectorEffect: 'non-scaling-stroke',
              paintOrder: 'stroke fill',
            },
          }}
        >
          <svg
            viewBox="0 0 960 760"
            width={960}
            height={760}
            role="img"
            aria-label="Interactive Thailand province map"
          >
            {mapGeoJson.features.map((geo, index) => {
              const province = getProvinceFromGeography(geo);
              const isSelected = province.iso === selectedProvince?.iso;
              const query = searchQuery.trim().toLowerCase();
              const isMatched =
                !!query && `${province.name} ${province.iso ?? ''}`.toLowerCase().includes(query);
              const provinceFill = getProvinceColor(province);
              const inactiveFill = selectedProvince ? '#dfe6dc' : provinceFill;
              const selectedFill = '#38b91f';
              const matchedFill = '#b786ff';
              const pathData = geoPathGenerator(geo);

              if (!pathData) {
                return null;
              }

              return (
                <path
                  key={String(geo.id ?? geo.properties?.shapeID ?? index)}
                  d={pathData}
                  role="button"
                  aria-label={`Select ${province.name}`}
                  tabIndex={0}
                  fill={isSelected ? selectedFill : isMatched ? matchedFill : inactiveFill}
                  stroke={
                    isSelected
                      ? theme.palette.common.white
                      : alpha(theme.palette.common.white, 0.76)
                  }
                  strokeWidth={isSelected ? 2 : 1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  onClick={() => {
                    handleSelectProvince(province);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleSelectProvince(province);
                    }
                  }}
                  style={{
                    cursor: 'pointer',
                    filter: isSelected
                      ? `drop-shadow(0 4px 7px ${alpha(theme.palette.primary.darker, 0.28)})`
                      : 'none',
                    outline: 'none',
                    transition:
                      'fill 140ms ease, filter 140ms ease, stroke 140ms ease, stroke-width 140ms ease',
                  }}
                >
                  <title>{province.name}</title>
                </path>
              );
            })}

            {!!selectedMarker && (
              <g
                transform={`translate(${selectedMarker.point[0]} ${selectedMarker.point[1] - 24})`}
              >
                <g pointerEvents="none">
                  <rect
                    x={-54}
                    y={-17}
                    width={108}
                    height={30}
                    rx={15}
                    fill={theme.palette.primary.darker}
                    stroke={theme.palette.common.white}
                    strokeWidth={1.2}
                  />
                  <text
                    y={3}
                    fill={theme.palette.common.white}
                    fontSize={11}
                    fontWeight={800}
                    textAnchor="middle"
                  >
                    {selectedMarker.name}
                  </text>
                  <path
                    d="M -5 12 L 0 20 L 5 12 Z"
                    fill={theme.palette.primary.darker}
                    stroke={theme.palette.common.white}
                    strokeWidth={1.2}
                  />
                  <circle
                    r={4}
                    cy={27}
                    fill={theme.palette.secondary.main}
                    stroke={theme.palette.primary.darker}
                    strokeWidth={1.6}
                  />
                </g>
              </g>
            )}
          </svg>
        </Box>
      </Box>

      {!!selectedProvince && (
        <Box
          sx={{
            right: { xs: 16, md: 42 },
            bottom: { xs: 22, md: 42 },
            left: { xs: 16, md: 'auto' },
            zIndex: 2,
            width: { xs: 'auto', md: 340 },
            p: { xs: 2.2, md: 2.6 },
            borderRadius: 1,
            position: 'absolute',
            bgcolor: alpha(theme.palette.primary.darker, 0.92),
            boxShadow: `0 22px 52px ${alpha(theme.palette.primary.darker, 0.24)}`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: 15,
              fontWeight: 800,
              lineHeight: 1.3,
            }}
          >
            {selectedProvince.name}
          </Typography>
          <Typography
            sx={{
              mt: 0.6,
              color: alpha(theme.palette.common.white, 0.72),
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            Province code {selectedProvince.iso ?? selectedProvince.id ?? 'N/A'} · selected on the
            interactive Thailand map
          </Typography>

          <Stack spacing={1.2} sx={{ mt: 2 }}>
            {MAP_SUMMARY.map((item) => (
              <Stack key={item.label} direction="row" alignItems="center" spacing={1.2}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: item.color,
                  }}
                />
                <Typography
                  sx={{
                    flex: 1,
                    color: alpha(theme.palette.common.white, 0.76),
                    fontSize: 12,
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

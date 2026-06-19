'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { CodeForCatHeader } from 'src/components/code-for-cat-header';
import { CodeForCatFooter } from 'src/components/code-for-cat-footer';

// ----------------------------------------------------------------------

const partnerItems = ['WEBSITE', 'MOBILE APP', 'UI/UX', 'E-COMMERCE', 'SYSTEM', 'CMS'];

const clientItems = [
  {
    name: 'North Studio',
    logo: '/assets/images/mock/company/company-1.webp',
  },
  {
    name: 'Mellow Cafe',
    logo: '/assets/images/mock/company/company-2.webp',
  },
  {
    name: 'Urban Clinic',
    logo: '/assets/images/mock/company/company-3.webp',
  },
  {
    name: 'Craft Market',
    logo: '/assets/images/mock/company/company-4.webp',
  },
  {
    name: 'Siam Retail',
    logo: '/assets/images/mock/company/company-5.webp',
  },
  {
    name: 'Lanna Works',
    logo: '/assets/images/mock/company/company-6.webp',
  },
];

const tabs = ['เว็บไซต์', 'แอป', 'ระบบหลังบ้าน', 'ร้านค้า', 'ดูแลต่อ'];

const featureItems = [
  'ออกแบบหน้าตาให้ตรงแบรนด์และใช้งานง่าย',
  'พัฒนาเว็บไซต์ แอป และระบบหลังบ้านตามความต้องการ',
  'รองรับมือถือ เดสก์ท็อป SEO และความเร็วในการโหลด',
  'ส่งมอบพร้อมคู่มือใช้งานและดูแลหลังขึ้นระบบจริง',
];

const stats = [
  { label: 'โปรเจกต์', value: '40+' },
  { label: 'วันเริ่มต้น', value: '7' },
  { label: 'ซัพพอร์ต', value: '24/7' },
];

const pricingPlans = [
  {
    price: '฿15,000',
    title: 'Landing Page',
    description: 'เหมาะสำหรับธุรกิจที่ต้องการหน้าเว็บขายสินค้า บริการ หรือแคมเปญเดียว',
    features: ['ออกแบบหน้าแรก', 'รองรับมือถือ', 'ฟอร์มติดต่อ'],
    highlighted: false,
  },
  {
    price: '฿35,000',
    title: 'Business Website',
    description: 'แพ็กเกจยอดนิยมสำหรับเว็บไซต์บริษัท พร้อมโครงสร้างเนื้อหาครบถ้วน',
    features: ['สูงสุด 8 หน้า', 'SEO พื้นฐาน', 'เชื่อมต่อ Analytics', 'สอนใช้งานหลังบ้าน'],
    highlighted: true,
  },
  {
    price: 'เริ่ม ฿79,000',
    title: 'Web / Mobile App',
    description: 'สำหรับระบบเฉพาะทาง แอปพลิเคชัน หรือแพลตฟอร์มที่ต้องมี workflow ชัดเจน',
    features: ['UX/UI Prototype', 'ระบบสมาชิก', 'Dashboard', 'API Integration'],
    highlighted: false,
  },
];

const noteFeatures = [
  {
    icon: 'solar:file-text-bold',
    title: 'Smart Project Plan',
    description: 'วาง scope, sitemap, feature list และ timeline ให้เห็นภาพก่อนเริ่มพัฒนา',
  },
  {
    icon: 'solar:settings-bold',
    title: 'Adaptive Development',
    description: 'ปรับรูปแบบงานได้ตามธุรกิจ ตั้งแต่เว็บองค์กร ร้านค้า ไปจนถึงระบบหลังบ้าน',
  },
  {
    icon: 'solar:like-bold',
    title: 'Simple & Flexible',
    description: 'ออกแบบให้ดูแลง่าย ขยายต่อได้ และส่งมอบพร้อมคำแนะนำหลังขึ้นระบบจริง',
  },
] as const;

const tone = {
  ink: '#171717',
  muted: '#6f6a62',
  subtle: '#8d887f',
  page: '#e8e5df',
  frame: '#f4f2ee',
  surface: '#fbfaf7',
  soft: '#ece8e1',
  line: '#ded9cf',
  accent: '#756b60',
  accentSoft: '#e7ded4',
};

const sectionSx = {
  px: { xs: 2.25, md: 7 },
  py: { xs: 7, md: 9 },
  bgcolor: tone.frame,
};

const sectionInnerSx = {
  mx: 'auto',
  width: 1,
  maxWidth: 1040,
};

function PhonePreview() {
  return (
    <Box
      sx={{
        zIndex: 1,
        p: 1.2,
        width: { xs: 190, sm: 230 },
        borderRadius: 4,
        bgcolor: tone.surface,
        border: `1px solid ${tone.line}`,
        boxShadow: '0 24px 60px rgba(46, 42, 36, 0.14)',
      }}
    >
      <Box
        sx={{
          p: 1.5,
          minHeight: { xs: 330, sm: 390 },
          overflow: 'hidden',
          borderRadius: 3,
          bgcolor: '#fffdf9',
          border: `1px solid ${tone.line}`,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: 10, fontWeight: 800 }}>9:19</Typography>
          <Stack direction="row" spacing={0.5}>
            <Box sx={{ width: 14, height: 6, borderRadius: 4, bgcolor: '#202020' }} />
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#202020' }} />
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: 2,
            height: 106,
            overflow: 'hidden',
            borderRadius: 2.5,
            position: 'relative',
          }}
        >
          <Image
            alt="Website and application preview"
            src="/assets/images/home/home-chart.webp"
            ratio="16/9"
            sx={{ width: 1, height: 1 }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.45))',
            }}
          />
          <Typography
            sx={{
              left: 12,
              bottom: 10,
              zIndex: 1,
              color: '#fff',
              fontSize: 13,
              fontWeight: 800,
              position: 'absolute',
            }}
          >
            Dashboard
          </Typography>
        </Box>

        <Typography sx={{ mt: 2.2, color: '#111', fontSize: 18, fontWeight: 900, lineHeight: 1.1 }}>
          เว็บไซต์และแอปพร้อมใช้งาน
        </Typography>

        <Typography sx={{ mt: 1, color: '#666', fontSize: 11, lineHeight: 1.6 }}>
          วางโครงสร้าง ออกแบบ พัฒนา และเชื่อมต่อระบบให้ธุรกิจเริ่มใช้งานได้จริง
        </Typography>

        <Stack spacing={1.1} sx={{ mt: 2.4 }}>
          {['UX/UI Design', 'Web Development', 'Mobile App'].map((item) => (
            <Stack
              key={item}
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ p: 1, borderRadius: 2, bgcolor: '#f4f4f4' }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  display: 'grid',
                  borderRadius: '50%',
                  placeItems: 'center',
                  color: tone.ink,
                  bgcolor: tone.accentSoft,
                }}
              >
                <Iconify icon="solar:check-circle-bold" width={14} />
              </Box>
              <Typography sx={{ color: tone.ink, fontSize: 11, fontWeight: 800 }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export function HomeView() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        color: tone.ink,
        bgcolor: tone.page,
        fontFamily: "'LINE Seed Sans TH', sans-serif",
      }}
    >
      <Box sx={{ px: { xs: 1.5, md: '5%' }, py: { xs: 2, md: '5%' } }}>
        <Box
          sx={{
            mx: 'auto',
            maxWidth: '100%',
            overflow: 'hidden',
            borderRadius: { xs: 3, md: 4 },
            bgcolor: tone.frame,
            border: '8px solid rgba(255,255,255,0.7)',
            boxShadow: '0 34px 100px rgba(46, 42, 36, 0.1)',
          }}
        >
          <Box
            sx={{
              minHeight: { xs: 720, md: 760 },
              position: 'relative',
              px: { xs: 2, md: 5 },
              pt: { xs: 2, md: 7 },
              pb: { xs: 2, md: 5 },
              bgcolor: tone.frame,
              backgroundImage: `
                linear-gradient(90deg, rgba(45,40,34,0.06) 1px, transparent 1px),
                linear-gradient(180deg, rgba(45,40,34,0.06) 1px, transparent 1px)
              `,
              backgroundSize: { xs: '72px 72px', md: '120px 120px' },
            }}
          >
            <CodeForCatHeader sticky />

            <Box sx={{ mx: 'auto', mt: { xs: 7, md: 10 }, maxWidth: 790, textAlign: 'center' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={0.6}
                sx={{ mb: 2 }}
              >
                <Box
                  sx={{
                    px: 1,
                    py: 0.35,
                    color: '#fff',
                    borderRadius: 999,
                    bgcolor: tone.ink,
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  New
                </Box>
                <Typography sx={{ color: tone.muted, fontSize: 12, fontWeight: 700 }}>
                  รับทำเว็บไซต์และแอปพลิเคชันแบบครบวงจร
                </Typography>
                <Iconify icon="solar:forward-bold" width={14} />
              </Stack>

              <Typography
                component="h1"
                sx={{
                  mx: 'auto',
                  color: tone.ink,
                  maxWidth: 720,
                  fontSize: { xs: 46, sm: 64, md: 78 },
                  fontWeight: 950,
                  lineHeight: 0.98,
                  letterSpacing: 0,
                }}
              >
                Build your website and application with{' '}
                <Box
                  component="span"
                  sx={{
                    mt: 2,
                    p: 2,
                    color: tone.accent,
                    display: 'inline-block',
                    borderRadius: 999,
                    bgcolor: tone.accentSoft,
                    boxShadow: 'inset 0 0 0 2px rgba(117,107,96,0.1)',
                    fontSize: { xs: 32, md: 48 },
                  }}
                >
                  CODE FOR CAT
                </Box>
              </Typography>

              <Typography
                sx={{
                  mx: 'auto',
                  mt: 2,
                  color: tone.muted,
                  maxWidth: 560,
                  fontSize: { xs: 14, md: 15 },
                  lineHeight: 1.65,
                }}
              >
                เราช่วยเปลี่ยนไอเดียธุรกิจให้เป็นเว็บไซต์ แอปพลิเคชัน และระบบจัดการที่สวย ใช้งานง่าย
                และพร้อมเติบโตไปกับทีมของคุณ
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                spacing={1.2}
                sx={{ mt: 4, flexWrap: 'wrap', rowGap: 1.2 }}
              >
                <Button
                  href="/contact-us"
                  variant="contained"
                  startIcon={<Iconify icon="solar:flag-bold" />}
                  sx={{
                    px: 2.2,
                    py: 1.1,
                    color: '#fff',
                    borderRadius: 999,
                    bgcolor: tone.ink,
                    fontSize: 12,
                    fontWeight: 800,
                    boxShadow: '0 12px 24px rgba(0,0,0,0.16)',
                    '&:hover': { bgcolor: '#000' },
                  }}
                >
                  ปรึกษาฟรี
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Iconify icon="solar:file-text-bold" />}
                  sx={{
                    px: 2.2,
                    py: 1.1,
                    color: tone.ink,
                    borderRadius: 999,
                    bgcolor: '#fff',
                    fontSize: 12,
                    fontWeight: 800,
                    boxShadow: '0 12px 24px rgba(46,42,36,0.08)',
                    '&:hover': { bgcolor: '#fff' },
                  }}
                >
                  ดูผลงาน
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                mt: { xs: 8, md: 10 },
                mx: { xs: -2, md: -7 },
                py: 4,
                borderTop: `1px solid ${tone.line}`,
                borderBottom: `1px solid ${tone.line}`,
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 3, md: 8 }}
                sx={{ color: tone.subtle, flexWrap: 'wrap', rowGap: 2 }}
              >
                {partnerItems.map((item, index) => (
                  <Typography
                    key={item}
                    sx={{
                      px: index === 1 ? 4 : 0,
                      py: index === 1 ? 1.5 : 0,
                      color: index === 1 ? tone.ink : 'inherit',
                      borderRadius: index === 1 ? 2 : 0,
                      bgcolor: index === 1 ? tone.surface : 'transparent',
                      boxShadow: index === 1 ? '0 14px 30px rgba(46,42,36,0.08)' : 'none',
                      fontSize: { xs: 16, md: 21 },
                      fontWeight: 950,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Stack alignItems="center" sx={{ mt: 5.5, textAlign: 'center' }}>
              <Image
                src="/assets/code-for-cat/logo.png"
                alt="Logo"
                ratio="1/1"
                sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
              />
              <Typography sx={{ mt: 1.4, color: tone.ink, fontSize: 18, fontWeight: 900 }}>
                Quick and Easy Launch
              </Typography>
              <Typography sx={{ mt: 0.7, color: tone.muted, maxWidth: 480, fontSize: 13 }}>
                &quot;เริ่มจากโจทย์ธุรกิจของคุณ แล้วเราออกแบบเส้นทางให้ไปถึงระบบที่ใช้ได้จริง&quot;
              </Typography>
            </Stack>
          </Box>

          <Box id="services" sx={{ ...sectionSx, textAlign: 'center' }}>
            <Typography
              sx={{
                mx: 'auto',
                px: 1.5,
                py: 0.6,
                width: 'fit-content',
                color: tone.muted,
                borderRadius: 999,
                bgcolor: tone.surface,
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              Our Services
            </Typography>

            <Typography
              component="h2"
              sx={{ mt: 2, color: tone.ink, fontSize: { xs: 32, md: 42 }, fontWeight: 950 }}
            >
              ครบตั้งแต่ดีไซน์จนถึงดูแลหลังบ้าน
            </Typography>
            <Typography sx={{ mx: 'auto', mt: 1, color: tone.muted, maxWidth: 430, fontSize: 14 }}>
              เลือกบริการที่เหมาะกับธุรกิจของคุณ จะเริ่มจากเว็บไซต์หน้าเดียวหรือระบบเต็มรูปแบบก็ได้
            </Typography>

            <Box
              sx={{
                mx: 'auto',
                mt: 4,
                width: 1,
                maxWidth: { xs: 1, md: 'fit-content' },
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              <Stack
                direction="row"
                justifyContent={{ xs: 'flex-start', md: 'center' }}
                sx={{
                  mx: { xs: 0, md: 'auto' },
                  p: 0.6,
                  width: { xs: 'max-content', md: 'fit-content' },
                  minWidth: { xs: '100%', md: 'auto' },
                  borderRadius: 999,
                  bgcolor: tone.soft,
                }}
              >
                {tabs.map((tab, index) => (
                  <Box
                    key={tab}
                    sx={{
                      px: { xs: 2, sm: 2.2 },
                      py: 1,
                      color: tone.ink,
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                      borderRadius: 999,
                      bgcolor: index === 2 ? tone.surface : 'transparent',
                      boxShadow: index === 2 ? '0 10px 20px rgba(46,42,36,0.08)' : 'none',
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {tab}
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box
              sx={{
                mt: 4,
                mx: 'auto',
                p: { xs: 2.5, md: 5 },
                maxWidth: 1040,
                overflow: 'hidden',
                borderRadius: 2,
                textAlign: 'left',
                bgcolor: tone.surface,
                border: `1px solid ${tone.line}`,
                boxShadow: '0 18px 52px rgba(46,42,36,0.08)',
              }}
            >
              <Box
                sx={{
                  gap: { xs: 4, md: 5 },
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
                }}
              >
                <Box>
                  <Image
                    src="/assets/code-for-cat/logo.png"
                    alt="Logo"
                    ratio="1/1"
                    sx={{ width: { xs: 50, md: 60 }, height: { xs: 50, md: 60 } }}
                  />
                  <Typography
                    sx={{ mt: 1.6, color: tone.ink, fontSize: { xs: 28, md: 34 }, fontWeight: 950 }}
                  >
                    Digital Products That Feel Like You
                  </Typography>

                  <Stack spacing={1.7} sx={{ mt: 3 }}>
                    {featureItems.map((item) => (
                      <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                        <Iconify icon="solar:check-circle-bold" width={18} color={tone.accent} />
                        <Typography sx={{ color: tone.ink, fontSize: 14, fontWeight: 750 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Box
                    sx={{
                      mt: 4,
                      display: 'grid',
                      gap: 1.4,
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    }}
                  >
                    {stats.map((stat) => (
                      <Box key={stat.label} sx={{ p: 1.5, borderRadius: 2, bgcolor: tone.soft }}>
                        <Typography sx={{ color: tone.ink, fontSize: 24, fontWeight: 950 }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: tone.muted, fontSize: 11, fontWeight: 800 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ position: 'relative' }}
                >
                  <PhonePreview />
                  <Box
                    sx={{
                      zIndex: 0,
                      right: 120,
                      position: 'absolute',
                      mr: { xs: -4, md: -7 },
                      width: { xs: 150, sm: 180 },
                      height: { xs: 245, sm: 300 },
                      borderRadius: 4,
                      opacity: 0.44,
                      bgcolor: tone.soft,
                      filter: 'blur(1px)',
                      border: `1px solid ${tone.line}`,
                    }}
                  />
                </Stack>
              </Box>
            </Box>
          </Box>

          <Box id="clients" sx={{ ...sectionSx, bgcolor: tone.surface }}>
            <Box sx={sectionInnerSx}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    mx: 'auto',
                    px: 1.4,
                    py: 0.6,
                    width: 'fit-content',
                    color: tone.muted,
                    borderRadius: 999,
                    bgcolor: tone.soft,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  Our Clients
                </Typography>
                <Typography
                  sx={{ mt: 2, color: tone.ink, fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}
                >
                  ลูกค้าของเรา
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  display: 'grid',
                  gap: { xs: 1.5, md: 2 },
                  gridTemplateColumns: {
                    xs: 'repeat(2, minmax(0, 1fr))',
                    sm: 'repeat(3, minmax(0, 1fr))',
                    md: 'repeat(6, minmax(0, 1fr))',
                  },
                }}
              >
                {clientItems.map((client) => (
                  <Box
                    key={client.name}
                    sx={{
                      p: { xs: 2, md: 2.5 },
                      height: { xs: 104, md: 118 },
                      display: 'grid',
                      borderRadius: 2,
                      placeItems: 'center',
                      bgcolor: tone.frame,
                      border: `1px solid ${tone.line}`,
                      boxShadow: '0 14px 34px rgba(46,42,36,0.05)',
                    }}
                  >
                    <Box
                      component="img"
                      alt={client.name}
                      src={client.logo}
                      sx={{
                        width: 1,
                        maxWidth: 112,
                        maxHeight: 46,
                        objectFit: 'contain',
                        opacity: 0.66,
                        filter:
                          'grayscale(1) sepia(0.12) saturate(0.25) contrast(0.86) brightness(0.88)',
                        mixBlendMode: 'luminosity',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box id="pricing" sx={{ ...sectionSx, bgcolor: tone.surface }}>
            <Box sx={sectionInnerSx}>
              <Typography sx={{ color: tone.ink, fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}>
                Choose your pricing plan
              </Typography>
              <Typography
                sx={{ mt: 1, color: tone.muted, maxWidth: 600, fontSize: 14, lineHeight: 1.7 }}
              >
                เลือกแพ็กเกจที่เหมาะกับเป้าหมายของคุณ
                เริ่มจากหน้าเว็บไซต์ขนาดเล็กไปจนถึงเว็บแอปและระบบเฉพาะทาง
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: 'grid',
                  gap: { xs: 2, md: 2.5 },
                  alignItems: 'stretch',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                }}
              >
                {pricingPlans.map((plan) => (
                  <Box
                    key={plan.title}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      color: plan.highlighted ? tone.ink : '#fff',
                      minHeight: 260,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      bgcolor: plan.highlighted ? tone.surface : tone.ink,
                      border: plan.highlighted ? `1px solid ${tone.line}` : `1px solid ${tone.ink}`,
                      boxShadow: plan.highlighted
                        ? '0 18px 52px rgba(46,42,36,0.12)'
                        : '0 14px 34px rgba(46,42,36,0.1)',
                    }}
                  >
                    <Typography sx={{ fontSize: { xs: 26, md: 30 }, fontWeight: 950 }}>
                      {plan.price}
                    </Typography>
                    <Typography sx={{ mt: 1, fontSize: 15, fontWeight: 900 }}>
                      {plan.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: plan.highlighted ? tone.muted : 'rgba(255,255,255,0.68)',
                        fontSize: 12,
                        lineHeight: 1.6,
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2.4 }}>
                      {plan.features.map((feature) => (
                        <Stack key={feature} direction="row" spacing={1} alignItems="center">
                          <Iconify
                            icon="solar:check-circle-bold"
                            width={15}
                            color={plan.highlighted ? tone.accent : '#fff'}
                          />
                          <Typography sx={{ fontSize: 12, fontWeight: 750 }}>{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 'auto',
                        py: 1,
                        color: plan.highlighted ? '#fff' : tone.ink,
                        borderRadius: 999,
                        bgcolor: plan.highlighted ? tone.ink : tone.surface,
                        fontSize: 12,
                        fontWeight: 900,
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: plan.highlighted ? '#000' : tone.soft,
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {plan.highlighted ? 'เริ่มโปรเจกต์' : 'สอบถามแพ็กเกจ'}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box id="workflow" sx={sectionSx}>
            <Box sx={sectionInnerSx}>
              <Typography
                sx={{
                  px: 1.4,
                  py: 0.6,
                  width: 'fit-content',
                  color: tone.muted,
                  borderRadius: 999,
                  bgcolor: tone.surface,
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Smart workflow
              </Typography>
              <Typography
                sx={{ mt: 2, color: tone.ink, fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}
              >
                Smarter Projects. One Simple Space to Capture, Organize & Remember.
              </Typography>
              <Typography
                sx={{ mt: 1, color: tone.muted, maxWidth: 720, fontSize: 14, lineHeight: 1.7 }}
              >
                เราจัดทุกอย่างให้เป็นขั้นตอนชัดเจน ตั้งแต่สรุป requirement, wireframe, design,
                development, testing และ launch เพื่อให้คุณเห็นความคืบหน้าได้ตลอดทาง
              </Typography>

              <Box
                sx={{
                  mt: 5,
                  display: 'grid',
                  gap: { xs: 4, md: 6 },
                  alignItems: 'center',
                  gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    minHeight: 300,
                    display: 'grid',
                    borderRadius: 2,
                    placeItems: 'center',
                    bgcolor: tone.surface,
                    border: `1px solid ${tone.line}`,
                    boxShadow: '0 18px 48px rgba(46,42,36,0.06)',
                  }}
                >
                  <Box sx={{ position: 'relative', width: 230, height: 180 }}>
                    <Box
                      sx={{
                        left: 28,
                        bottom: 20,
                        width: 174,
                        height: 58,
                        position: 'absolute',
                        borderRadius: 1.5,
                        bgcolor: tone.line,
                        transform: 'skew(-18deg)',
                      }}
                    />
                    {[0, 1, 2, 3, 4, 5].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          top: [26, 52, 20, 74, 44, 76][item],
                          left: [48, 82, 118, 142, 164, 68][item],
                          width: 34,
                          height: 34,
                          display: 'grid',
                          borderRadius: '50%',
                          placeItems: 'center',
                          color: '#fff',
                          position: 'absolute',
                          bgcolor: tone.accent,
                          boxShadow: '0 10px 22px rgba(46,42,36,0.12)',
                        }}
                      >
                        <Iconify icon="solar:monitor-bold" width={16} />
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Stack spacing={3}>
                  {noteFeatures.map((feature) => (
                    <Stack key={feature.title} direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          display: 'grid',
                          flexShrink: 0,
                          borderRadius: 1.2,
                          placeItems: 'center',
                          color: tone.ink,
                          bgcolor: tone.surface,
                          border: `1px solid ${tone.line}`,
                        }}
                      >
                        <Iconify icon={feature.icon} width={18} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: tone.ink, fontSize: 17, fontWeight: 950 }}>
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{ mt: 0.7, color: tone.muted, fontSize: 13, lineHeight: 1.7 }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>

          <Box sx={{ ...sectionSx }}>
            <Box
              sx={{
                mx: 'auto',
                p: { xs: 4, md: 6 },
                maxWidth: 1040,
                overflow: 'hidden',
                borderRadius: 2,
                textAlign: 'center',
                position: 'relative',
                bgcolor: tone.soft,
                border: `1px solid ${tone.line}`,
              }}
            >
              <Box
                sx={{
                  top: 32,
                  left: '18%',
                  width: 14,
                  height: 14,
                  opacity: 0.28,
                  borderRadius: 0.8,
                  position: 'absolute',
                  bgcolor: tone.line,
                }}
              />
              <Box
                sx={{
                  right: -26,
                  bottom: -32,
                  width: 130,
                  height: 130,
                  opacity: 0.35,
                  borderRadius: '50%',
                  position: 'absolute',
                  bgcolor: tone.surface,
                }}
              />

              <Typography sx={{ color: tone.ink, fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}>
                How You Take Your Project?
              </Typography>
              <Typography
                sx={{
                  mx: 'auto',
                  mt: 1,
                  color: tone.muted,
                  maxWidth: 560,
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                เล่าไอเดียของคุณให้เราฟัง แล้วเราจะช่วยแปลงเป็นแผนงานและหน้าจอแรกให้เห็นภาพ
              </Typography>

              <Stack direction="row" spacing={1.2} justifyContent="center" sx={{ mt: 3 }}>
                <Button
                  href="/contact-us"
                  variant="contained"
                  sx={{
                    color: '#fff',
                    borderRadius: 999,
                    bgcolor: tone.ink,
                    fontSize: 12,
                    fontWeight: 900,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#000', boxShadow: 'none' },
                  }}
                >
                  ปรึกษาโปรเจกต์
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: tone.ink,
                    borderRadius: 999,
                    bgcolor: tone.surface,
                    fontSize: 12,
                    fontWeight: 900,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: tone.surface, boxShadow: 'none' },
                  }}
                >
                  ดูขั้นตอนทำงาน
                </Button>
              </Stack>
            </Box>
          </Box>

          <CodeForCatFooter />
        </Box>
      </Box>
    </Box>
  );
}

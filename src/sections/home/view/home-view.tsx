'use client';

import { useState } from 'react';
import { m } from 'framer-motion';

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
    name: 'aclab',
    logo: '/assets/partner/logo-aclab.png',
  },
  {
    name: 'ku',
    logo: '/assets/partner/logo-ku.png',
  },
  {
    name: 'isbc',
    logo: '/assets/partner/logo-isbc.png',
  },
  // {
  //   name: 'Craft Market',
  //   logo: '/assets/partner/logo-craft-market.png',
  // },
  // {
  //   name: 'Siam Retail',
  //   logo: '/assets/images/mock/company/company-5.webp',
  // },
  // {
  //   name: 'Lanna Works',
  //   logo: '/assets/images/mock/company/company-6.webp',
  // },
];

const serviceTabs = [
  {
    label: 'เว็บไซต์',
    headline: 'เว็บไซต์ที่พร้อมขายและเล่าแบรนด์ได้ชัด',
    features: [
      'ออกแบบหน้าเว็บให้ตรงแบรนด์และอ่านง่าย',
      'วาง sitemap, landing page, blog และหน้าบริการ',
      'รองรับมือถือ เดสก์ท็อป SEO และความเร็วในการโหลด',
      'ส่งมอบพร้อมคู่มือแก้ไขเนื้อหาและดูแลหลังขึ้นระบบ',
    ],
    stats: [
      { label: 'หน้าเริ่มต้น', value: '5+' },
      { label: 'วันเริ่มต้น', value: '7' },
      { label: 'SEO พื้นฐาน', value: 'พร้อม' },
    ],
    previewTitle: 'Website Launch',
    previewHeading: 'เว็บไซต์พร้อมใช้งาน',
    previewDescription: 'วางโครงสร้าง ออกแบบ พัฒนา และเชื่อมต่อข้อมูลให้ธุรกิจเริ่มออนไลน์ได้จริง',
    previewItems: ['UX/UI Design', 'Responsive Website', 'SEO Setup'],
    previewVariant: 'website',
  },
  {
    label: 'แอป',
    headline: 'แอปที่ใช้งานง่ายตั้งแต่ flow แรก',
    features: [
      'ออกแบบ user flow และ prototype ก่อนพัฒนา',
      'ทำ mobile app หรือ web app ตาม workflow ธุรกิจ',
      'เชื่อมต่อ API, login, notification และระบบสมาชิก',
      'ทดสอบบนอุปกรณ์จริงและเตรียมส่งมอบให้ทีมใช้งาน',
    ],
    stats: [
      { label: 'Prototype', value: '1st' },
      { label: 'แพลตฟอร์ม', value: 'iOS/Android' },
      { label: 'Support', value: '24/7' },
    ],
    previewTitle: 'Mobile App',
    previewHeading: 'แอปพร้อมให้ลูกค้าใช้งาน',
    previewDescription: 'ออกแบบหน้าจอและระบบหลังบ้านให้ flow สั้น เข้าใจง่าย และต่อยอดฟีเจอร์ได้',
    previewItems: ['App Prototype', 'API Integration', 'Push Notification'],
    previewVariant: 'app',
  },
  {
    label: 'ระบบหลังบ้าน',
    headline: 'ระบบหลังบ้านที่ทีมใช้จัดการงานได้จริง',
    features: [
      'วิเคราะห์ workflow และออกแบบ dashboard ให้ตรงงาน',
      'จัดการข้อมูล ผู้ใช้ สิทธิ์อนุมัติ และรายงานสำคัญ',
      'เชื่อมต่อฐานข้อมูล API และระบบภายนอกตามโจทย์',
      'เตรียมคู่มือ admin และสอนทีมก่อนใช้งานจริง',
    ],
    stats: [
      { label: 'โมดูล', value: '8+' },
      { label: 'Role', value: 'Multi' },
      { label: 'Report', value: 'Live' },
    ],
    previewTitle: 'Dashboard',
    previewHeading: 'ระบบจัดการพร้อมใช้',
    previewDescription:
      'จัดข้อมูล งานอนุมัติ และรายงานให้อยู่ใน dashboard เดียวที่ทีมเข้าใจได้เร็ว',
    previewItems: ['Admin Dashboard', 'Role Permission', 'Data Report'],
    previewVariant: 'dashboard',
  },
  {
    label: 'ร้านค้า',
    headline: 'ร้านค้าออนไลน์ที่ซื้อขายได้ลื่นขึ้น',
    features: [
      'จัดหน้าสินค้า หมวดหมู่ โปรโมชั่น และตะกร้า',
      'เชื่อมต่อ payment, order, delivery และแจ้งเตือน',
      'ทำหลังบ้านจัดการสต็อก คำสั่งซื้อ และลูกค้า',
      'ปรับประสบการณ์ checkout ให้สั้นและเหมาะกับมือถือ',
    ],
    stats: [
      { label: 'สินค้า', value: '100+' },
      { label: 'Payment', value: 'พร้อม' },
      { label: 'Order', value: 'Real-time' },
    ],
    previewTitle: 'Storefront',
    previewHeading: 'ร้านค้าพร้อมรับออเดอร์',
    previewDescription:
      'จัดหน้าร้าน ระบบสั่งซื้อ และหลังบ้านให้ขายง่ายขึ้นทั้งบนมือถือและเดสก์ท็อป',
    previewItems: ['Product Catalog', 'Checkout Flow', 'Order Management'],
    previewVariant: 'store',
  },
  {
    label: 'ดูแลต่อ',
    headline: 'ดูแลระบบหลังส่งมอบให้เดินต่อได้สบาย',
    features: [
      'ตรวจ health check, backup และอัปเดต dependency',
      'แก้บั๊ก ปรับหน้า เพิ่มคอนเทนต์ และดูแลความเร็ว',
      'ติดตาม analytics พร้อมข้อเสนอปรับปรุงเป็นรอบ',
      'มีช่องทาง support สำหรับทีมหลังขึ้นระบบจริง',
    ],
    stats: [
      { label: 'Monitor', value: '24/7' },
      { label: 'SLA', value: 'เร็ว' },
      { label: 'Report', value: 'รายเดือน' },
    ],
    previewTitle: 'Care Plan',
    previewHeading: 'มีทีมดูแลหลังบ้าน',
    previewDescription: 'ติดตามสถานะ แก้ปัญหา และปรับระบบต่อเนื่องให้ธุรกิจไม่ต้องหยุดรอ',
    previewItems: ['Maintenance', 'Performance Check', 'Content Update'],
    previewVariant: 'care',
  },
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

const sectionSx = {
  px: { xs: 2.25, md: 7 },
  py: { xs: 7, md: 15 },
  bgcolor: 'secondary.main',
};

const sectionInnerSx = {
  mx: 'auto',
  width: 1,
  maxWidth: 1040,
};

const motionViewport = { once: true, amount: 0.22 };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const springTransition = {
  duration: 0.7,
  ease: 'easeOut',
} as const;

type ServiceTab = (typeof serviceTabs)[number];

function ServicePreviewArtwork({ service }: { service: ServiceTab }) {
  const panelSx = {
    borderRadius: 1.2,
    bgcolor: 'rgba(255,255,255,0.5)',
    border: '1px solid rgba(255,255,255,0.5)',
  };

  if (service.previewVariant === 'website') {
    return (
      <Box sx={{ p: 1.1, height: 1 }}>
        <Box sx={{ ...panelSx, p: 0.7, height: 1 }}>
          <Stack direction="row" spacing={0.3}>
            {[0, 1, 2].map((item) => (
              <Box
                key={item}
                sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'rgba(23,23,23,0.3)' }}
              />
            ))}
          </Stack>
          <Box sx={{ mt: 1, width: 0.62, height: 8, borderRadius: 1, bgcolor: '#fff' }} />
          <Box sx={{ mt: 0.8, width: 0.82, height: 5, borderRadius: 1, bgcolor: '#d5d0c6' }} />
          <Box sx={{ mt: 1.2, display: 'grid', gap: 0.6, gridTemplateColumns: '1.2fr 1fr' }}>
            <Box sx={{ height: 34, borderRadius: 1.2, bgcolor: '#b7afa3' }} />
            <Stack spacing={0.5}>
              <Box sx={{ height: 10, borderRadius: 1, bgcolor: '#fff' }} />
              <Box sx={{ height: 10, borderRadius: 1, bgcolor: '#e8e4dc' }} />
              <Box sx={{ height: 10, borderRadius: 1, bgcolor: '#d5d0c6' }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  }

  if (service.previewVariant === 'app') {
    return (
      <Box sx={{ p: 1.1, height: 1 }}>
        <Stack direction="row" spacing={0.8} sx={{ height: 1 }}>
          <Box sx={{ ...panelSx, p: 0.8, width: 0.46 }}>
            <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#fff' }} />
            <Box sx={{ mt: 1, width: 0.8, height: 7, borderRadius: 1, bgcolor: '#d5d0c6' }} />
            <Stack spacing={0.5} sx={{ mt: 1.2 }}>
              {[0, 1, 2].map((item) => (
                <Box key={item} sx={{ height: 11, borderRadius: 1.1, bgcolor: '#fff' }} />
              ))}
            </Stack>
          </Box>
          <Stack spacing={0.8} sx={{ flex: 1 }}>
            {[0, 1].map((item) => (
              <Box
                key={item}
                sx={{ ...panelSx, flex: 1, bgcolor: item === 0 ? '#fff' : '#c4bcb0' }}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    );
  }

  if (service.previewVariant === 'store') {
    return (
      <Box sx={{ p: 1.1, height: 1 }}>
        <Box sx={{ ...panelSx, p: 0.8, height: 1 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box sx={{ width: 42, height: 8, borderRadius: 1, bgcolor: '#fff' }} />
            <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#756b60' }} />
          </Stack>
          <Box
            sx={{
              mt: 1,
              display: 'grid',
              gap: 0.6,
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            }}
          >
            {['#fff', '#d5d0c6', '#b7afa3', '#cfc8bd', '#fff', '#aaa194'].map((color, index) => (
              <Box key={index} sx={{ height: 22, borderRadius: 1, bgcolor: color }} />
            ))}
          </Box>
          <Stack direction="row" spacing={0.6} sx={{ mt: 1 }}>
            <Box sx={{ flex: 1, height: 12, borderRadius: 999, bgcolor: '#fff' }} />
            <Box sx={{ width: 34, height: 12, borderRadius: 999, bgcolor: '#756b60' }} />
          </Stack>
        </Box>
      </Box>
    );
  }

  if (service.previewVariant === 'care') {
    return (
      <Box sx={{ p: 1.1, height: 1 }}>
        <Box sx={{ ...panelSx, p: 0.8, height: 1 }}>
          <Stack direction="row" spacing={0.7} alignItems="center">
            <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#fff' }} />
            <Box sx={{ flex: 1 }}>
              <Box sx={{ width: 0.7, height: 7, borderRadius: 1, bgcolor: '#fff' }} />
              <Box sx={{ mt: 0.5, width: 0.45, height: 5, borderRadius: 1, bgcolor: '#d5d0c6' }} />
            </Box>
          </Stack>
          <Stack spacing={0.6} sx={{ mt: 1.1 }}>
            {['Uptime 99.9%', 'Backup Ready', 'Speed Healthy'].map((item, index) => (
              <Stack
                key={item}
                direction="row"
                spacing={0.6}
                alignItems="center"
                sx={{
                  px: 0.7,
                  height: 17,
                  borderRadius: 1,
                  bgcolor: index === 0 ? '#756b60' : '#fff',
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: index === 0 ? '#fff' : '#756b60',
                  }}
                />
                <Typography
                  sx={{
                    color: index === 0 ? '#fff' : 'primary.darker',
                    fontSize: 7,
                    fontWeight: 900,
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 1.1, height: 1 }}>
      <Box sx={{ ...panelSx, p: 0.8, height: 1 }}>
        <Stack direction="row" spacing={0.8} alignItems="flex-end" sx={{ height: 58 }}>
          {[28, 46, 34, 66, 42, 58].map((height, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                height,
                borderRadius: '6px 6px 0 0',
                bgcolor: index === 3 ? '#756b60' : '#b7afa3',
              }}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={0.6} sx={{ mt: 1 }}>
          <Box sx={{ flex: 1, height: 8, borderRadius: 999, bgcolor: '#fff' }} />
          <Box sx={{ width: 32, height: 8, borderRadius: 999, bgcolor: '#d5d0c6' }} />
        </Stack>
      </Box>
    </Box>
  );
}

function DesktopPreview({ service }: { service: ServiceTab }) {
  return (
    <Box
      sx={{
        zIndex: 1,
        p: 1.3,
        width: { xs: 1, sm: 380, md: 440 },
        maxWidth: 1,
        borderRadius: 3,
        bgcolor: 'secondary.lighter',
        border: 1,
        borderColor: 'secondary.darker',
        boxShadow: '0 24px 60px rgba(46, 42, 36, 0.14)',
      }}
    >
      <Box
        sx={{
          minHeight: { xs: 260, sm: 300 },
          overflow: 'hidden',
          borderRadius: 2.3,
          bgcolor: '#fffdf9',
          border: 1,
          borderColor: 'secondary.darker',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            px: 1.5,
            py: 1,
            borderBottom: 1,
            borderColor: 'secondary.darker',
            bgcolor: '#f7f4ee',
          }}
        >
          <Stack direction="row" spacing={0.5}>
            {['#8b8175', '#b9b0a4', '#d5cec4'].map((color) => (
              <Box key={color} sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: color }} />
            ))}
          </Stack>
          <Box sx={{ flex: 1, height: 12, borderRadius: 999, bgcolor: '#ebe7df' }} />
          <Typography sx={{ color: 'primary.dark', fontSize: 9, fontWeight: 900 }}>
            codeforcat.app
          </Typography>
        </Stack>

        <Box
          sx={{
            p: { xs: 1.4, sm: 1.8 },
            display: 'grid',
            gap: 1.4,
            gridTemplateColumns: { xs: '1fr', sm: '0.58fr 1fr' },
          }}
        >
          <Box
            sx={{
              p: 1.2,
              display: { xs: 'none', sm: 'block' },
              borderRadius: 2,
              bgcolor: '#f3f0ea',
              border: 1,
              borderColor: 'secondary.darker',
            }}
          >
            <Box sx={{ width: 34, height: 34, borderRadius: 1.5, bgcolor: 'primary.lighter' }} />
            <Stack spacing={0.8} sx={{ mt: 1.6 }}>
              {service.previewItems.map((item, index) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={0.8}
                  alignItems="center"
                  sx={{
                    px: 0.9,
                    height: 28,
                    borderRadius: 1.4,
                    bgcolor: index === 0 ? 'secondary.lighter' : 'transparent',
                  }}
                >
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
                  <Typography sx={{ color: 'primary.darker', fontSize: 9, fontWeight: 900 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box>
            <Box
              sx={{
                height: { xs: 126, sm: 154 },
                overflow: 'hidden',
                borderRadius: 2,
                position: 'relative',
                bgcolor: '#d8d3ca',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(117,107,96,0.48))',
              }}
            >
              <ServicePreviewArtwork service={service} />
              <Box
                sx={{
                  inset: 0,
                  position: 'absolute',
                  background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.42))',
                }}
              />
              <Typography
                sx={{
                  left: 14,
                  bottom: 12,
                  zIndex: 1,
                  color: '#fff',
                  fontSize: { xs: 13, sm: 15 },
                  fontWeight: 900,
                  position: 'absolute',
                }}
              >
                {service.previewTitle}
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 1.6,
                color: '#111',
                fontSize: { xs: 18, sm: 21 },
                fontWeight: 950,
                lineHeight: 1.1,
              }}
            >
              {service.previewHeading}
            </Typography>

            <Typography sx={{ mt: 0.8, color: '#666', fontSize: 11, lineHeight: 1.6 }}>
              {service.previewDescription}
            </Typography>

            <Box
              sx={{
                mt: 1.6,
                display: 'grid',
                gap: 0.8,
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
              }}
            >
              {service.previewItems.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  alignItems="center"
                  spacing={0.7}
                  sx={{ p: 0.8, minHeight: 38, borderRadius: 1.5, bgcolor: '#f4f4f4' }}
                >
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      display: 'grid',
                      flexShrink: 0,
                      borderRadius: '50%',
                      placeItems: 'center',
                      color: 'primary.darker',
                      bgcolor: 'primary.lighter',
                    }}
                  >
                    <Iconify icon="solar:check-circle-bold" width={12} />
                  </Box>
                  <Typography sx={{ color: 'primary.darker', fontSize: 9.5, fontWeight: 900 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function MobilePreview({ service }: { service: ServiceTab }) {
  return (
    <Box
      sx={{
        zIndex: 1,
        p: 1.2,
        width: { xs: 190, sm: 230 },
        borderRadius: 4,
        bgcolor: 'secondary.lighter',
        border: 1,
        borderColor: 'secondary.darker',
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
          border: 1,
          borderColor: 'secondary.darker',
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
            bgcolor: '#d8d3ca',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(117,107,96,0.48))',
          }}
        >
          <ServicePreviewArtwork service={service} />
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
            {service.previewTitle}
          </Typography>
        </Box>

        <Typography sx={{ mt: 2.2, color: '#111', fontSize: 18, fontWeight: 900, lineHeight: 1.1 }}>
          {service.previewHeading}
        </Typography>

        <Typography sx={{ mt: 1, color: '#666', fontSize: 11, lineHeight: 1.6 }}>
          {service.previewDescription}
        </Typography>

        <Stack spacing={1.1} sx={{ mt: 2.4 }}>
          {service.previewItems.map((item) => (
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
                  color: 'primary.darker',
                  bgcolor: 'primary.lighter',
                }}
              >
                <Iconify icon="solar:check-circle-bold" width={14} />
              </Box>
              <Typography sx={{ color: 'primary.darker', fontSize: 11, fontWeight: 800 }}>
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
  const [activeServiceIndex, setActiveServiceIndex] = useState(2);
  const activeService = serviceTabs[activeServiceIndex];

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        color: 'primary.darker',
        bgcolor: 'secondary.dark',
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
            bgcolor: 'secondary.main',
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
              bgcolor: 'secondary.main',
              backgroundImage: `
                linear-gradient(90deg, rgba(45,40,34,0.06) 1px, transparent 1px),
                linear-gradient(180deg, rgba(45,40,34,0.06) 1px, transparent 1px)
              `,
              backgroundSize: { xs: '72px 72px', md: '120px 120px' },
            }}
          >
            <CodeForCatHeader sticky />

            <Box
              component={m.div}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              sx={{ mx: 'auto', mt: { xs: 7, md: 10 }, maxWidth: 790, textAlign: 'center' }}
            >
              <Stack
                component={m.div}
                variants={fadeUp}
                transition={springTransition}
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
                    bgcolor: 'primary.darker',
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  New
                </Box>
                <Typography sx={{ color: 'primary.dark', fontSize: 14, fontWeight: 700 }}>
                  รับทำเว็บไซต์และแอปพลิเคชันแบบครบวงจร
                </Typography>
                <Iconify icon="solar:forward-bold" width={14} />
              </Stack>

              <Typography
                component={m.h1}
                variants={fadeUp}
                transition={springTransition}
                sx={{
                  mx: 'auto',
                  color: 'primary.darker',
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
                    color: 'primary.main',
                    display: 'inline-block',
                    borderRadius: 999,
                    bgcolor: 'primary.lighter',
                    boxShadow: 'inset 0 0 0 2px rgba(117,107,96,0.1)',
                    fontSize: { xs: 32, md: 48 },
                  }}
                >
                  CODE FOR CAT
                </Box>
              </Typography>

              <Typography
                component={m.p}
                variants={fadeUp}
                transition={springTransition}
                sx={{
                  mx: 'auto',
                  mt: 2,
                  color: 'primary.dark',
                  maxWidth: 560,
                  fontSize: { xs: 14, md: 18 },
                  lineHeight: 1.65,
                }}
              >
                เราช่วยเปลี่ยนไอเดียธุรกิจให้เป็นเว็บไซต์ แอปพลิเคชัน และระบบจัดการที่สวย ใช้งานง่าย
                และพร้อมเติบโตไปกับทีมของคุณ
              </Typography>

              <Stack
                component={m.div}
                variants={fadeUp}
                transition={springTransition}
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
                    bgcolor: 'primary.darker',
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
                    color: 'primary.darker',
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
              }}
            >
              <Stack
                component={m.div}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 3, md: 8 }}
                sx={{ color: 'primary.light', flexWrap: 'wrap', rowGap: 2 }}
              >
                {partnerItems.map((item, index) => (
                  <Typography
                    component={m.span}
                    variants={fadeIn}
                    transition={{ ...springTransition, delay: 0.3 + index * 0.04 }}
                    key={item}
                    sx={{
                      px: index === 1 ? 4 : 0,
                      py: index === 1 ? 1.5 : 0,
                      color: index === 1 ? 'primary.darker' : 'inherit',
                      borderRadius: index === 1 ? 2 : 0,
                      bgcolor: index === 1 ? 'secondary.lighter' : 'transparent',
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

            <Stack
              component={m.div}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springTransition, delay: 0.45 }}
              alignItems="center"
              sx={{ mt: 5.5, textAlign: 'center' }}
            >
              <Image
                src="/assets/code-for-cat/logo-3d.png"
                alt="Logo"
                ratio="1/1"
                sx={{ width: { xs: 250, md: 250 }, height: { xs: 250, md: 250 } }}
              />
              <Typography sx={{ mt: 1.4, color: 'primary.darker', fontSize: 18, fontWeight: 900 }}>
                Quick and Easy Launch
              </Typography>
              <Typography sx={{ mt: 0.7, color: 'primary.dark', maxWidth: 480, fontSize: 16 }}>
                &quot;เริ่มจากโจทย์ธุรกิจของคุณ แล้วเราออกแบบเส้นทางให้ไปถึงระบบที่ใช้ได้จริง&quot;
              </Typography>
            </Stack>
          </Box>

          <Box
            id="services"
            component={m.section}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={staggerContainer}
            sx={{ ...sectionSx, textAlign: 'center' }}
          >
            <Typography
              component={m.div}
              variants={fadeUp}
              transition={springTransition}
              sx={{
                mx: 'auto',
                px: 1.5,
                py: 0.6,
                width: 'fit-content',
                color: 'primary.dark',
                borderRadius: 999,
                bgcolor: 'secondary.lighter',
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              Our Services
            </Typography>

            <Typography
              component={m.h2}
              variants={fadeUp}
              transition={springTransition}
              sx={{ mt: 2, color: 'primary.darker', fontSize: { xs: 32, md: 42 }, fontWeight: 950 }}
            >
              ครบตั้งแต่ดีไซน์จนถึงดูแลหลังบ้าน
            </Typography>
            <Typography
              component={m.p}
              variants={fadeUp}
              transition={springTransition}
              sx={{ mx: 'auto', mt: 1, color: 'primary.dark', maxWidth: 430, fontSize: 18 }}
            >
              เลือกบริการที่เหมาะกับธุรกิจของคุณ จะเริ่มจากเว็บไซต์หน้าเดียวหรือระบบเต็มรูปแบบก็ได้
            </Typography>

            <Box
              component={m.div}
              variants={fadeUp}
              transition={springTransition}
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
                  bgcolor: 'secondary.light',
                }}
              >
                {serviceTabs.map((tab, index) => {
                  const isActive = index === activeServiceIndex;

                  return (
                    <Box
                      component="button"
                      key={tab.label}
                      type="button"
                      onClick={() => setActiveServiceIndex(index)}
                      sx={{
                        px: { xs: 2, sm: 2.2 },
                        py: 1,
                        m: 0,
                        border: 0,
                        color: 'primary.darker',
                        cursor: 'pointer',
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                        borderRadius: 999,
                        bgcolor: isActive ? 'secondary.lighter' : 'transparent',
                        boxShadow: isActive ? '0 10px 20px rgba(46,42,36,0.08)' : 'none',
                        fontFamily: 'inherit',
                        fontSize: 12,
                        fontWeight: 800,
                        transition: 'background-color 180ms ease, box-shadow 180ms ease',
                        '&:hover': {
                          bgcolor: isActive ? 'secondary.lighter' : 'rgba(255,255,255,0.38)',
                        },
                      }}
                    >
                      {tab.label}
                    </Box>
                  );
                })}
              </Stack>
            </Box>
            <Box
              component={m.div}
              variants={fadeUp}
              transition={springTransition}
              sx={{
                mt: 4,
                mx: 'auto',
                p: { xs: 2.5, md: 5 },
                maxWidth: 1040,
                overflow: 'hidden',
                borderRadius: 2,
                textAlign: 'left',
                bgcolor: 'secondary.lighter',
                border: 1,
                borderColor: 'secondary.darker',
                boxShadow: '0 18px 52px rgba(46,42,36,0.08)',
              }}
            >
              <Box
                sx={{
                  gap: { xs: 4, md: 5 },
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                }}
              >
                <Box>
                  <Image
                    src="/assets/code-for-cat/face.png"
                    alt="Logo"
                    ratio="1/1"
                    sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
                  />
                  <Typography
                    sx={{
                      mt: 1.6,
                      color: 'primary.darker',
                      fontSize: { xs: 28, md: 34 },
                      fontWeight: 950,
                    }}
                  >
                    {activeService.headline}
                  </Typography>

                  <Stack spacing={1.7} sx={{ mt: 3 }}>
                    {activeService.features.map((item) => (
                      <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                        <Iconify
                          icon="solar:check-circle-bold"
                          width={18}
                          sx={{ color: 'primary.main' }}
                        />
                        <Typography sx={{ color: 'primary.darker', fontSize: 14, fontWeight: 750 }}>
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
                    {activeService.stats.map((stat) => (
                      <Box
                        key={stat.label}
                        sx={{ p: 1.5, borderRadius: 2, bgcolor: 'secondary.light' }}
                      >
                        <Typography sx={{ color: 'primary.darker', fontSize: 20, fontWeight: 950 }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: 'primary.dark', fontSize: 11, fontWeight: 800 }}>
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
                  {activeService.previewVariant === 'app' ? (
                    <MobilePreview service={activeService} />
                  ) : (
                    <DesktopPreview service={activeService} />
                  )}
                  <Box
                    sx={{
                      zIndex: 0,
                      right: activeService.previewVariant === 'app' ? 120 : { xs: 20, md: 26 },
                      position: 'absolute',
                      mr: activeService.previewVariant === 'app' ? { xs: -4, md: -7 } : 0,
                      width:
                        activeService.previewVariant === 'app'
                          ? { xs: 150, sm: 180 }
                          : { xs: 240, sm: 300, md: 340 },
                      height:
                        activeService.previewVariant === 'app'
                          ? { xs: 245, sm: 300 }
                          : { xs: 160, sm: 210, md: 240 },
                      borderRadius: activeService.previewVariant === 'app' ? 4 : 3,
                      opacity: 0.44,
                      bgcolor: 'secondary.light',
                      filter: 'blur(1px)',
                      border: 1,
                      borderColor: 'secondary.darker',
                    }}
                  />
                </Stack>
              </Box>
            </Box>
          </Box>

          <Box
            id="clients"
            component={m.section}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={staggerContainer}
            sx={{ ...sectionSx, bgcolor: 'secondary.lighter' }}
          >
            <Box sx={sectionInnerSx}>
              <Box
                component={m.div}
                variants={fadeUp}
                transition={springTransition}
                sx={{ textAlign: 'center' }}
              >
                <Typography
                  sx={{
                    mx: 'auto',
                    px: 1.4,
                    py: 0.6,
                    width: 'fit-content',
                    color: 'primary.dark',
                    borderRadius: 999,
                    bgcolor: 'secondary.light',
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  Our Clients
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: 'primary.darker',
                    fontSize: { xs: 30, md: 42 },
                    fontWeight: 950,
                  }}
                >
                  ลูกค้าของเรา
                </Typography>
              </Box>

              <Box
                component={m.div}
                variants={staggerContainer}
                sx={{
                  mt: 4,
                  display: 'grid',
                  gap: { xs: 1.5, md: 2 },
                  gridTemplateColumns: {
                    xs: 'repeat(2, minmax(0, 1fr))',
                    sm: 'repeat(3, minmax(0, 1fr))',
                    md: 'repeat(3, minmax(0, 1fr))',
                  },
                }}
              >
                {clientItems.map((client) => (
                  <Box
                    component={m.div}
                    variants={fadeUp}
                    transition={springTransition}
                    key={client.name}
                    sx={{
                      p: { xs: 2, md: 2.5 },
                      height: { xs: 'auto', md: 'auto' },
                      display: 'grid',
                      borderRadius: 2,
                      placeItems: 'center',
                      bgcolor: 'secondary.main',
                      border: 1,
                      borderColor: 'secondary.darker',
                      boxShadow: '0 14px 34px rgba(46,42,36,0.05)',
                    }}
                  >
                    <Box
                      component="img"
                      alt={client.name}
                      src={client.logo}
                      sx={{
                        width: 1,
                        maxWidth: 200,
                        objectFit: 'contain',
                        // opacity: 0.66,
                        // filter:
                        //   'grayscale(4) sepia(1) saturate(0.2) contrast(0.1) brightness(0.88)',
                        // mixBlendMode: 'luminosity',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            id="pricing"
            component={m.section}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={staggerContainer}
            sx={{ ...sectionSx, bgcolor: 'secondary.lighter' }}
          >
            <Box sx={sectionInnerSx}>
              <Typography
                component={m.h2}
                variants={fadeUp}
                transition={springTransition}
                sx={{ color: 'primary.darker', fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}
              >
                Choose your pricing plan
              </Typography>
              <Typography
                component={m.p}
                variants={fadeUp}
                transition={springTransition}
                sx={{ mt: 1, color: 'primary.dark', maxWidth: 600, fontSize: 18, lineHeight: 1.7 }}
              >
                เลือกแพ็กเกจที่เหมาะกับเป้าหมายของคุณ
                เริ่มจากหน้าเว็บไซต์ขนาดเล็กไปจนถึงเว็บแอปและระบบเฉพาะทาง
              </Typography>

              <Box
                component={m.div}
                variants={staggerContainer}
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
                    component={m.div}
                    variants={fadeUp}
                    transition={springTransition}
                    key={plan.title}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      color: plan.highlighted ? 'primary.darker' : '#fff',
                      minHeight: 300,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      bgcolor: plan.highlighted ? 'secondary.lighter' : 'primary.darker',
                      border: 1,
                      borderColor: plan.highlighted ? 'secondary.darker' : 'primary.darker',
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
                        color: plan.highlighted ? 'primary.dark' : 'rgba(255,255,255,0.68)',
                        fontSize: 12,
                        lineHeight: 1.6,
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2.4, mb: 2 }}>
                      {plan.features.map((feature) => (
                        <Stack key={feature} direction="row" spacing={1} alignItems="center">
                          <Iconify
                            icon="solar:check-circle-bold"
                            width={15}
                            sx={{ color: plan.highlighted ? 'primary.main' : '#fff' }}
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
                        color: plan.highlighted ? '#fff' : 'primary.darker',
                        borderRadius: 999,
                        bgcolor: plan.highlighted ? 'primary.darker' : 'secondary.lighter',
                        fontSize: 12,
                        fontWeight: 900,
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: plan.highlighted ? '#000' : 'secondary.light',
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

          <Box
            id="workflow"
            component={m.section}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={staggerContainer}
            sx={sectionSx}
          >
            <Box sx={sectionInnerSx}>
              <Typography
                component={m.div}
                variants={fadeUp}
                transition={springTransition}
                sx={{
                  px: 1.4,
                  py: 0.6,
                  width: 'fit-content',
                  color: 'primary.dark',
                  borderRadius: 999,
                  bgcolor: 'secondary.lighter',
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Smart workflow
              </Typography>
              <Typography
                component={m.h2}
                variants={fadeUp}
                transition={springTransition}
                sx={{
                  mt: 2,
                  color: 'primary.darker',
                  fontSize: { xs: 30, md: 42 },
                  fontWeight: 950,
                }}
              >
                Smarter Projects. One Simple Space to Capture, Organize & Remember.
              </Typography>
              <Typography
                component={m.p}
                variants={fadeUp}
                transition={springTransition}
                sx={{ mt: 1, color: 'primary.dark', maxWidth: 720, fontSize: 18, lineHeight: 1.7 }}
              >
                เราจัดทุกอย่างให้เป็นขั้นตอนชัดเจน ตั้งแต่สรุป requirement, wireframe, design,
                development, testing และ launch เพื่อให้คุณเห็นความคืบหน้าได้ตลอดทาง
              </Typography>

              <Box
                component={m.div}
                variants={fadeUp}
                transition={springTransition}
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
                    bgcolor: 'secondary.lighter',
                    border: 1,
                    borderColor: 'secondary.darker',
                    boxShadow: '0 18px 48px rgba(46,42,36,0.06)',
                  }}
                >
                  <Box sx={{ position: 'relative', width: { xs: 260, sm: 340 }, height: 190 }}>
                    <Box
                      sx={{
                        left: 18,
                        right: 18,
                        top: 78,
                        height: 2,
                        position: 'absolute',
                        bgcolor: 'secondary.darker',
                      }}
                    />
                    {(
                      [
                        { label: 'Brief', icon: 'solar:file-text-bold', top: 18, left: 0 },
                        { label: 'Design', icon: 'solar:palette-bold', top: 88, left: 24 },
                        { label: 'Build', icon: 'solar:settings-bold', top: 18, left: 48 },
                        { label: 'Test', icon: 'solar:shield-check-bold', top: 88, left: 72 },
                        { label: 'Launch', icon: 'solar:flag-bold', top: 18, left: 96 },
                      ] as const
                    ).map((step, index) => (
                      <Box
                        key={step.label}
                        sx={{
                          top: step.top,
                          left: `${step.left}%`,
                          width: 68,
                          position: 'absolute',
                          transform: index === 4 ? 'translateX(-100%)' : 'translateX(-50%)',
                        }}
                      >
                        <Box
                          sx={{
                            mx: 'auto',
                            width: 38,
                            height: 38,
                            display: 'grid',
                            borderRadius: '50%',
                            placeItems: 'center',
                            color: '#fff',
                            bgcolor: 'primary.main',
                            boxShadow: '0 10px 22px rgba(46,42,36,0.14)',
                          }}
                        >
                          <Iconify icon={step.icon} width={18} />
                        </Box>
                        <Typography
                          sx={{
                            mt: 0.7,
                            color: 'primary.darker',
                            fontSize: 10,
                            fontWeight: 900,
                            textAlign: 'center',
                          }}
                        >
                          {step.label}
                        </Typography>
                      </Box>
                    ))}
                    <Box
                      sx={{
                        left: 30,
                        right: 30,
                        bottom: 8,
                        p: 1.2,
                        position: 'absolute',
                        borderRadius: 2,
                        bgcolor: 'secondary.light',
                        border: 1,
                        borderColor: 'secondary.darker',
                        boxShadow: '0 16px 34px rgba(46,42,36,0.08)',
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                        <Box
                          sx={{
                            flex: 1,
                            height: 8,
                            borderRadius: 999,
                            bgcolor: 'secondary.lighter',
                          }}
                        />
                        <Box
                          sx={{
                            width: 48,
                            height: 8,
                            borderRadius: 999,
                            bgcolor: 'secondary.darker',
                          }}
                        />
                      </Stack>
                      <Stack direction="row" spacing={0.8} sx={{ mt: 1 }}>
                        {[0, 1, 2].map((item) => (
                          <Box
                            key={item}
                            sx={{
                              flex: 1,
                              height: 22,
                              borderRadius: 1.2,
                              bgcolor: item === 1 ? 'primary.lighter' : 'secondary.lighter',
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Box>

                <Stack spacing={3}>
                  {noteFeatures.map((feature) => (
                    <Stack
                      component={m.div}
                      variants={fadeUp}
                      transition={springTransition}
                      key={feature.title}
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          display: 'grid',
                          flexShrink: 0,
                          borderRadius: 1.2,
                          placeItems: 'center',
                          color: 'primary.darker',
                          bgcolor: 'secondary.lighter',
                          border: 1,
                          borderColor: 'secondary.darker',
                        }}
                      >
                        <Iconify icon={feature.icon} width={18} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: 'primary.darker', fontSize: 17, fontWeight: 950 }}>
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{ mt: 0.7, color: 'primary.dark', fontSize: 13, lineHeight: 1.7 }}
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

          <Box
            component={m.section}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={fadeUp}
            transition={springTransition}
            sx={{ ...sectionSx }}
          >
            <Box
              sx={{
                mx: 'auto',
                p: { xs: 4, md: 6 },
                maxWidth: 1040,
                overflow: 'hidden',
                borderRadius: 2,
                textAlign: 'center',
                position: 'relative',
                bgcolor: 'secondary.light',
                border: 1,
                borderColor: 'secondary.darker',
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
                  bgcolor: 'secondary.darker',
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
                  bgcolor: 'secondary.lighter',
                }}
              />

              <Typography
                sx={{ color: 'primary.darker', fontSize: { xs: 30, md: 42 }, fontWeight: 950 }}
              >
                How You Take Your Project?
              </Typography>
              <Typography
                sx={{
                  mx: 'auto',
                  mt: 1,
                  color: 'primary.dark',
                  maxWidth: 560,
                  fontSize: 18,
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
                    bgcolor: 'primary.darker',
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
                    color: 'primary.darker',
                    borderRadius: 999,
                    bgcolor: 'secondary.lighter',
                    fontSize: 12,
                    fontWeight: 900,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: 'secondary.lighter', boxShadow: 'none' },
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

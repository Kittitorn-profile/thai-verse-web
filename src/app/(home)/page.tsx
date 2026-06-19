import type { Metadata } from 'next';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Thailand Cultural',
  description: 'สำรวจสถานที่ วัฒนธรรม และเรื่องเล่าท้องถิ่นในประเทศไทย',
};

export default function Page() {
  return <HomeView />;
}

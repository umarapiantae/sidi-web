import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Tentang SiDi | Sistem Digitaliasi',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}

import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Produk', href: '/#features' },
  { label: 'Aplikasi', href: '/#pricing' },
  { label: 'Penyedia', href: '/#product ' },
  { label: 'Kontak', href: '/#contact ' },
  { label: 'Tentang', href: '/documentation' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Aplikasi Web',
    paragraph:
      'Produk tentang layanan aplikasi media sosial, kolaborasi, hiburan, keuangan, pendidikan, dan layanan informasi.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Dokumen Digital',
    paragraph:
      'Produk tentang template dokumen DOCX, PDF, TXT, XLSX, presentasi, formulir, dan dokumen lainnya.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Desain Digital',
    paragraph:
      'Produk tentang template Infografis, Animasi dan video, Ilustrasi digital, dan template desain spanduk/poster.',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 32,
      yearly: 320,
    },
    subscriber: 1,
    button: 'Pembelian', link: '/#features',
    option: [
      'Responsive design',
      'Konten statis (HTML, CSS)',
      'Animasi ringan (scrolling)',
      'URL (namaURL.sidi.my.id)',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 67,
      yearly: 670,
    },
    subscriber: 3,
    button: 'Pembelian', link: '/#features',
    option: [
      'Semua fitur Lite',
      'Framework SPA',
      'Routing internal',
      'Form kontak dinamis',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Pro',
    price: {
      monthly: 100,
      yearly: 999,
    },
    subscriber: 5,
    button: 'Pembelian', link: '/#features',
    option: [
      'Semua fitur Basic',
      'Admin Panel (CMS ringan)',
      'SEO & Google Analytics',
      'Dukungan teknis penuh',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Tentang', href: '/documentation' },
  { label: 'Bantuan', href: '/documentation#bantuan' },
  { label: 'Digisma', href: 'https://digisma.sidi.my.id ' },
  { label: 'Blog', href: 'https://blog.sidi.my.id ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}

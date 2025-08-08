import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className='bg-header pt-28 lg:pb-14 overflow-hidden'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-5'>
              <h1 className='text-6xl max-w-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Inovasi Digital, Diciptakan untuk Anda Miliki.
              </h1>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                SiDi (Sistem Digitalisasi) menghadirkan berbagai produk digital yang dirancang untuk memudahkan pengelolaan administrasi dan penyajian informasi secara terpadu. Jelajahi dan temukan kemudahannya!
              </p>
              <div className='mx-auto lg:mx-0'>
                <Link href={'https://digisma.sidi.my.id'} target='_blank'>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Jelajahi sekarang
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.webp'
                alt='nothing'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

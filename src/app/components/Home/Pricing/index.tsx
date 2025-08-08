'use client'
import { SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { plansData } from '@/app/types/plans'
import PlansSkeleton from '@/app/Skeleton/Plans'
import Link from 'next/link' // Tambahkan ini di paling atas

const Pricing = () => {
  const [plans, setPlans] = useState<plansData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const [selectedCategory, setSelectedCategory] = useState<
    'monthly' | 'yearly'
  >('yearly')

  const handleCategoryChange = (
    category: SetStateAction<'monthly' | 'yearly'>
  ) => {
    setSelectedCategory(category)
  }

  const filteredData = plans.filter((item) =>
    item.category.includes(selectedCategory)
  )

  return (
    <section id='pricing' className='bg-header relative py-20'>
      <Image
        src='/images/pricing/upperline.png'
        alt='upperline-image'
        width={280}
        height={219}
        className='absolute top-[160px] left-[90px] hidden sm:block opacity-5'
      />
      <Image
        src='/images/pricing/lowerline.png'
        alt='lowerline-image'
        width={180}
        height={100}
        className='absolute bottom-[0px] right-[90px] opacity-5'
      />
      <div className='container px-4'>
        <h2 className='text-center'>Paket Harga Aplikasi Web (SPA).</h2>

        <p className='text-lg font-normal text-center text-black/60 pt-5 max-w-2xl mx-auto'>
          SPA (Single Page Application) adalah aplikasi web yang memiliki satu halaman banyak interaksi, dan dirancang sesuai kebutuhan Anda. Pilih paket yang sesuai dengan gaya hidup Anda.
        </p>

        {/* Yearly/Monthly Toggle Buttons */}
        <div className='mt-6 relative'>
          <div className='flex justify-center'>
            <div className='bg-deepSlate flex py-1 px-1 rounded-full'>
              <button
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'yearly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('yearly')}>
                Tahunan
              </button>
              <button
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'monthly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('monthly')}>
                Bulanan
              </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((item, index) => (
                <div
                  className='pt-10 pb-28 px-10 bg-white rounded-2xl shadow-lg relative hover:bg-primary group overflow-hidden'
                  key={index}>
                  <Image
                    src={item.imgSrc}
                    alt='star-image'
                    width={154}
                    height={154}
                    className='absolute bottom-[-4%] right-[-6%] opacity-10'
                  />
                  <h3 className='mb-8 text-midnight_text group-hover:text-white'>
                    {item.heading}
                  </h3>
                  <Link href={item.link || '#'} passHref>
                  <button className='text-xl font-medium text-white w-full bg-primary hover:text-white group-hover:bg-deepSlate group-hover:border-deepSlate border-2 border-primary rounded-full py-4 px-12 mb-8 hover:cursor-pointer'>
                    {item.button}
                  </button>
                  </Link>
                  <p className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-3 group-hover:text-white'>
                    IDR&nbsp;
                    {selectedCategory === 'monthly'
                      ? item.price.monthly
                      : item.price.yearly}K
                    <span className='text-lightgrey text-3xl sm:text-4xl'>
                      {selectedCategory === 'monthly' ? '/bln' : '/thn'}
                    </span>
                  </p>
                  <p className='text-lg font-normal text-black group-hover:text-white'>
                    {item.subscriber} &nbsp;Revisi
                    <span>/ Paket</span>
                  </p>
                  <p className='text-lg font-normal text-black/40 mb-6 group-hover:text-white'>
                    (minta revisi per masa aktif)
                  </p>

                  {/* Plan Features with icons */}
                  <div className='mt-6'>
                    {item.option.map((feature, idx) => (
                      <div key={idx} className='flex gap-4 pt-4'>
                        <Icon
                          icon='tabler:circle-check-filled'
                          className='text-2xl text-emerald-400'
                        />
                        <p className='text-lg font-medium text-black/60 group-hover:text-white/60'>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

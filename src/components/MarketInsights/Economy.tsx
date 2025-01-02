import React from 'react'
import { insights } from '../MarketInsights'
import { Link, useParams } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import CommonBanner from './ui/CommonBanner'
import { news } from '../../../data'
import NewsSections from './ui/NewsSections'
import Footer from '../Footer'

const Economy = () => {
  const param = useParams({
    from: "/market-insights/$title"
  })
  const data = insights.find((i) => i.title.toLowerCase() === param.title)
  const links = [
    {
      title: "Global",
      url: "/"
    },
    {
      title: "EMEA",
      url: "/"
    },
    {
      title: "Americas",
      url: "/"
    },
    {
      title: "APAC",
      url: "/"
    },
    {
      title: "Emerging Markets",
      url: "/"
    },
  ]

  return (
    <main>
      <div>
        <div className='relative'>
          <img src={data?.url} alt={data?.title} className='h-[500px] w-full object-cover' />
          <div className='absolute left-[10%] top-[60%] lg:left-[20%] lg:top-[40%] text-white'>
            <h1 className='text-[3rem] lg:text-[4rem] font-Akkurat font-extrabold '>{data?.title}</h1>
            <p className='text-[1.12rem] font-Akkurat font-bold max-w-[340px]'>S&P Global measures economic performance by country and region to provide macro insights to our customers and the wider markets.</p>
          </div>
        </div>

        <div className='flex gap-10 px-5 lg:px-10'>
          <p className='flex gap-2 items-center'>
            <span className='uppercase font-Akkurat font-extrabold text-red-600'>Topics</span>
            <ChevronDown className='block lg:hidden' />
          </p>
          <div className=' hidden lg:flex'>
            {links.map((link) => (
              <Link to={link.url} className='text-[1rem] leading-[1.5rem] p-[1rem] hover:bg-gray-100 font-Akkurat font-bold capitalize'>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className=' bg-gray-400 border border-1 border-gray-300 mx-5 lg:mx-10' />

        <div className='px-5 lg:px-10'>
          <CommonBanner title='Global' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_SustainableFinanceBanner?$responsive$' description='Macroeconomic conditions continue to be challenging for global markets. Supply chain issues, pandemic regulations, and geopolitical conflict impact markets and create structural risks that carry across borders' buttonLabel='Read More' />

          <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
            {news.map((n, i) => (
              <NewsSections news={n} index={i} />
            ))}
          </div>

          <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 ' />

          <CommonBanner title='EMEA' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_SustainableFinanceBanner?$responsive$' description='Europe, the Middle East, and Africa, continue to be affected by geopolitical conflict and changing trade flows. Rising interest rates, energy and food prices, and fear of recession will define the immediate future for these economies.' buttonLabel='Read More' />

          <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
            {news.map((n, i) => (
              <NewsSections news={n} index={i} />
            ))}
          </div>

          <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 ' />

        </div>

      </div>
      <Footer />
    </main >
  )
}

export default Economy

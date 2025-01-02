import React from 'react'
import { insights } from '../MarketInsights'
import { Link, useParams } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import CommonBanner from './ui/CommonBanner'
import NewsSections from './ui/NewsSections'
import ClimateBanner from '../ClimateBanner'
import { news } from '../../../data'
import Footer from '../Footer'
import BannerFlexButton from './ui/BannerFlexButton'
import ESGInsider from './ui/ESGInsider'

const Sustainability = () => {
  const param = useParams({
    from: "/market-insights/$title"
  })
  const data = insights.find((i) => i.title.toLowerCase() === param.title)
  const links = [
    {
      title: "Climate Risk & Resilience",
      url: "/"
    },
    {
      title: "Sustainable Finance",
      url: "/"
    },
    {
      title: "Social Equity",
      url: "/"
    },
    {
      title: "The Path to Net-Zero",
      url: "/"
    },
    {
      title: "Sustainability Regulation & Standards",
      url: "/"
    },
  ]

  return (
    <main className='m-0 p-0 '>
      <div className=' relative'>
        <img src={data?.url} alt={data?.title} className='h-[500px] w-full object-cover' />
        <div className='absolute left-[10%] top-[60%] lg:left-[20%] lg:top-[40%] text-white'>
          <h1 className='text-[3rem] lg:text-[4rem] font-Akkurat font-extrabold '>{data?.title}</h1>
          <p className='text-[1.12rem] font-Akkurat font-bold max-w-[340px]'>S&P Global looks at the impact of environmental change on countries, industries, companies, and individuals.</p>
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
        <CommonBanner img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_ClimateRiskBanner?$responsive$' title='Climate Risk & Resilience' description='The majority of companies today are exposed to physical assets at risk due to climate change. Understanding how to prevent or mitigate billions of dollars’ worth of climate risk is essential.' buttonLabel='Read More' />

        <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
          {news.map((n, i) => (
            <NewsSections news={n} index={i} />
          ))}
        </div>
        <ClimateBanner inInsights={false} />

        <ESGInsider />


        <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 ' />
        <CommonBanner title='Sustainabile Finance' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_SustainableFinanceBanner?$responsive$' description='In a world where investments that use sustainable criteria are measured in the trillions of dollars, insight into sustainable finance is a requirement for all market participants.' buttonLabel='Read More' />

        <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
          {news.map((n, i) => (
            <NewsSections news={n} index={i} />
          ))}
        </div>

        <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 ' />

        <CommonBanner title='Social Equity' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_SocialEquityBanner?$responsive$' description='Social issues are controversial at times, yet stakeholder capitalism, gender and racial diversity, and income inequality are driving investment and innovation in markets.' buttonLabel='Read More' />

        <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
          {news.map((n, i) => (
            <NewsSections news={n} index={i} />
          ))}
        </div>

        <BannerFlexButton headerTop='Women in the markets' headerTitle='Gender Data Matters' headerDescription='More work remains to be done to disaggregate gender data on the macroeconomic and individual sector and company level. Measurement is the first step in addressing serious gender disparities.' buttonLabel='Read The Reports' url='https://spglobal.scene7.com/is/image/spglobalcom/womeninthemarkets_3840x1140?$rectangle_large_2816X1638$' />


        <CommonBanner title='The Path to Net-Zero' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_NetZeroBanner?$responsive$' description='Net zero and carbon neutral commitments are on the rise as companies, financial institutions, and countries pledge to cut emissions as much as possible and offset the rest. But progress to date has been worryingly slow.' buttonLabel='Read More' />

        <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
          {news.map((n, i) => (
            <NewsSections news={n} index={i} />
          ))}
        </div>
        <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 ' />
        <CommonBanner title='Sustainability Reporting & Standards' img='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_SustainabilityReportingBanner?$responsive$' description='Investors are demanding transparency. Policymakers and regulators are imposing disclosure requirements. But a patchwork of reporting frameworks presents challenges for market participants.' buttonLabel='Read More' />

        <div className='grid grid-cols-1 grid-flow-row gap-[60px] md:grid-cols-3 lg:grid-cols-4'>
          {news.map((n, i) => (
            <NewsSections news={n} index={i} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Sustainability

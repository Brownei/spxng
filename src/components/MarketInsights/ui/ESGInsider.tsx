import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

const podcasts = [
  {
    name: "ESG Insider",
    dateRecorded: "2 August 2024",
    title: "Women in Leadership: Driving change in an auto industry ripe for disruption",
    cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/sustainable1/esg-insider/S1_0712_ESGInsider_bannersquare.jpg'
  },
  {
    name: "ESG Insider",
    dateRecorded: "2 August 2024",
    title: "What to expect from Climate Week NYC 2024",
    cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/sustainable1/esg-insider/S1_0712_ESGInsider_bannersquare.jpg'
  },
  {
    name: "ESG Insider",
    dateRecorded: "2 August 2024",
    title: "Better Faster Farther: Maggie Mertens and the Great Hobbit",
    cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/sustainable1/esg-insider/S1_0712_ESGInsider_bannersquare.jpg'
  },
]


const ESGInsider = () => {
  return (
    <div className='flex flex-col mt-[5rem] justify-between items-start lg:flex-row'>
      <div className='font-Akkurat grid gap-4'>
        <h3 className='text-[2.25rem] leading-[2.587rem] font-bold tracking-[-0.02rem]'>ESG Insider</h3>
        <p className='max-w-[500px] font-light text-[1.125rem] leading-[1.575rem] tracking-[-0.02rem]'>Subscribe to ESG Insider, a podcastfrom S&P Global Sustainable1 that takes you inside the environmental, social and governance issues shaping the business world through in-depth analysis and interviews with sustainability leaders.</p>
        <Link className='text-[0.875rem] leading-[1.225rem] font-bold flex gap-2 items-center text-red-600'>
          All Episodes
          <ChevronRight color='red' className='size-[16px]' />
        </Link>
      </div>

      <div className='flex flex-col mt-[30px] lg:mt-0 gap-3'>
        {podcasts.slice(0, 2).map((podcast, i) => (
          <div className='max-w-[700px] ' key={i}>
            <div className=' flex flex-row-reverse justify-center lg:justify-start relative border border-red-300 items-start gap-1 p-3 lg:p-4 bg-black text-white'>
              <img src={podcast.cover} className=' size-[84px] lg:size-[200px] object-cover' />
              <div className='lg:px-3 grid lg:py-5 gap-3'>
                <span className='text-[0.687rem] line-clamp-3 hidden lg:block leading-[0.894rem] max-w-[250px] tracking-[0.1em] uppercase font-Akkurat font-bold'>{podcast.name}</span>
                <span className='font-Akkurat font-light hidden lg:block text-[0.75rem] leading-[1.05rem]'>{podcast.dateRecorded}</span>
                <h3 className='text-[1.375rem] mt-3 leading-[1.575rem] tracking-[-0.02em] font-Akkurat font-bold'>{podcast.title}</h3>
                <ArrowRight className='size-[18px] lg:absolute lg:bottom-4 lg:left-7' />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ESGInsider

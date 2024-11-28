import { ArrowRight } from 'lucide-react'
import React from 'react'

const AIInsights = () => {
  return (
    <div className='grid lg:grid-cols-3 lg:grid-flow-row gap-[20px] lg:gap-[40px] items-center px-5 mt-[50px] lg:px-10 '>
      <div className='flex flex-col gap-4 h-fit lg:min-h-[500px] w-full p-5  font-Akkurat'>
        <h1 className='leading-[2.587rem] tracking-[-0.02em] font-black text-[2.25rem]'>Artificial Intelligence Insights</h1>
        <p className='text-[1.125rem] tracking-[-0.02em] leading-[1.675rem] font-normal'>The artificial intelligence landscape is ever-changing. These technological advancements are equally important to economic development as other major trends like globalization, social inclusion, and climate and energy transition. SXPNG aims to provide this information in three parts: <span className='font-black'>AI Fundamentals</span>, <span className='font-black'>AI Fundamentals</span> and <span className='font-black'>AI Fundamentals and Regulation</span></p>
        <button className='w-full bg-black text-[0.875rem] leading-[1.225rem] px-[1rem] py-[0.5rem] text-white font-bold'>Explore more Artificial Intelligence Insights</button>
      </div>

      <div className='flex flex-col gap-2 w-full group relative p-5  lg:pr-10 min-h-[500px]  border text-white bg-black font-Akkurat'>
        <span className='uppercase leading-[0.894rem] tracking-[0.1em] font-bold text-[0.687rem]'>SPECIAL REPORTS</span>
        <span className='font-normal text-[0.75rem] leading-[1.65rem]'>Oct 01, 2024</span>
        <h1 className='group-hover:underline font-bold tracking-[-0.02em] text-[1.875rem] leading-[2.156rem]'>Crypto and AI: Shaping the Future of the Internet</h1>
        <p className='text-[1rem] font-normal line-clamp-3 leading-[1.4rem]'>1 October 2024 Crypto and AI: Shaping the Future of the Internet By Todd Kanaster, Andrew O'Neill, Rebecca Mun, Josh Stokesberry, Matta Uma Maheswara Reddy, and Ava Yang</p>
        <button className='absolute bottom-4 left-3'>
          <ArrowRight />
        </button>
      </div>

      <div className='flex flex-col gap-2 group relative p-5  lg:pr-10 min-h-[500px]  border text-white bg-black font-Akkurat'>
        <span className='uppercase leading-[0.894rem] tracking-[0.1em] font-bold text-[0.687rem]'>SPECIAL REPORTS</span>
        <span className='font-normal text-[0.75rem] leading-[1.65rem]'>Oct 01, 2024</span>
        <h1 className='group-hover:underline font-bold tracking-[-0.02em] text-[1.875rem] leading-[2.156rem]'>India's AI ambitions: Can public-private partnerships lead the way?</h1>
        <p className='text-[1rem] font-normal line-clamp-3 leading-[1.4rem]'>1 October 2024 Crypto and AI: Shaping the Future of the Internet By Todd Kanaster, Andrew O'Neill, Rebecca Mun, Josh Stokesberry, Matta Uma Maheswara Reddy, and Ava Yang</p>
        <button className='absolute bottom-4 left-3'>
          <ArrowRight />
        </button>
      </div>

    </div>
  )
}

export default AIInsights

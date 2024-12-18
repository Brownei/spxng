import React from 'react'

const ClimateBanner = ({ inInsights }: { inInsights: boolean }) => {
  return (
    <div className='bg-gray-100 border border-3 border-transparent min-h-[410px] lg:min-h-[265px] mt-[60px]'>
      <div className={`relative ${inInsights && 'mx-3 my-2'} min-h-[401px] lg:min-h-[265px] ${inInsights && 'lg:mx-10 lg:my-5'} `}>
        <div className='absolute top-0 right-0 left-0 bottom-0'>
          <img src='https://spglobal.scene7.com/is/image/spglobalcom/Corp_1015_ClimateCenterofExcellence?$rectangle_large_2816X1638$' className='w-full h-full object-cover' />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-20' />
        <div className='text-white p-4 absolute lg:left-10 lg:top-10 z-30 flex flex-col gap-2 lg:gap-3 max-w-[817px] justify-center lg:p-0 lg:text-start'>
          <span className='uppercase leading-[0.894rem] tracking-[0.02em] font-bold text-[0.687rem]'>ADVANCING CLIMATE, ENVIRONMENTAL AND NATURE RESEARCH</span>
          <h1 className='text-[1.875rem] lg:text-[2.25rem] leading-[-0.02em] font-Akkurat font-black'>Climate Center of Excellence</h1>
          <p className="font-Akkurat text-[1rem]">
            The S&P Global Climate Center of Excellence sits within S&P Global Sustainable1’s Research and Methodology Team. The center is home to a group of world-class scientists and strategists dedicated to addressing the frontiers of long-term climate, environmental, and nature research and methodology development
          </p>

          <button className='py-3 px-5 bg-red-600 lg:mt-3 transition-colors text-white font-Akkurat font-bold hover:bg-black w-full lg:w-fit'>Lean More</button>
        </div>

      </div>
    </div>
  )
}

export default ClimateBanner

import React, { FC } from 'react'

type BannerFlexButtonProps = {
  headerTop: string
  headerTitle: string
  headerDescription: string
  url: string
  buttonLabel: string
}

const BannerFlexButton: FC<BannerFlexButtonProps> = ({ headerTop, headerDescription, headerTitle, buttonLabel, url }) => {
  return (
    <div className='bg-gray-100 border border-3 border-transparent min-h-[101px] lg:min-h-[205px] mt-[60px]'>
      <div className={`relative  min-h-[101px] lg:min-h-[205px] `}>
        <div className='absolute top-0 right-0 left-0 bottom-0'>
          <img src={url} className='w-full h-full object-cover' />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-20' />
        <div className='text-white p-4 absolute lg:left-10 lg:right-10 lg:top-10 z-30 flex flex-row gap-2 lg:gap-3 items-center justify-between lg:p-0 lg:text-start'>
          <div>
            <span className='uppercase leading-[0.894rem] tracking-[0.02em] font-bold text-[0.687rem]'>{headerTop}</span>
            <h1 className='text-[1.875rem] lg:text-[2.25rem] leading-[-0.02em] font-Akkurat font-black'>{headerTitle}</h1>
            <p className="font-Akkurat text-[1rem] max-w-[764px]">
              {headerDescription}
            </p>
          </div>
          <button className='py-[0.5rem] px-[1rem] bg-red-600  transition-colors text-white font-Akkurat font-bold hover:bg-black w-full lg:w-fit'>{buttonLabel}</button>
        </div>

      </div>
    </div>
  )
}

export default BannerFlexButton

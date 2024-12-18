import React, { FC } from 'react'
import NewsSections from './NewsSections'

type CommonBannerProps = {
  title: string
  description: string
  img: string
  buttonLabel: string
}


const CommonBanner: FC<CommonBannerProps> = ({ title, img, description, buttonLabel }) => {

  return (
    <div className='flex flex-col-reverse gap-3 w-full bg-gray-200 items-center my-[2rem] max-h-[600px] lg:flex-row'>
      <div className='p-[2rem] lg:p-0 lg:mx-[2rem] w-full lg:min-w-[500px] grid gap-3 '>
        <h2 className='text-[2.25rem] leading-[2.587rem] font-Akkurat font-bold'>{title}</h2>
        <p className='text-[1rem] leading-[1.2rem] max-w-[500px] font-Akkurat font-light'>{description}</p>
        <button className='text-[0.875rem] font-Akkurat w-fit font-bold py-[0.5rem] px-[1rem] hover:bg-black hover:text-white transition-colors duration-300 border-[1.5px] border-black'>{buttonLabel}</button>
      </div>

      <img className='w-full object-cover min-h-[300px]' src={img} alt='ice berg' />

    </div>
  )
}

export default CommonBanner

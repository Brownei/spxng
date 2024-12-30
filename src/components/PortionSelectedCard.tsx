import { ArrowRight } from 'lucide-react';
import React, { FC } from 'react'

type PortionSelectedCardProps = {
  title: string;
  imgUrl: string
}

const PortionSelectedCard: FC<PortionSelectedCardProps> = ({ title, imgUrl }) => {
  return (
    <div className='relative font-Akkurat font-extrabold'>
      <img src={imgUrl} alt={title} className='w-full h-[115px] object-cover' />
      <h1 className='absolute top-4 left-8 text-white text-[1.2rem] lg:text-[1.375rem]'>{title}</h1>
      <ArrowRight className='absolute bottom-4 left-8' />
    </div>
  )
}

export default PortionSelectedCard

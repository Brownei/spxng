import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { addHyphen } from '../../lib';

type PortionSelectedCardProps = {
  title: string;
  imgUrl: string
  setSHowHarmburgerMenu: Dispatch<SetStateAction<boolean>>
}

const PortionSelectedCard: FC<PortionSelectedCardProps> = ({ title, setSHowHarmburgerMenu, imgUrl }) => {
  return (
    <Link onClick={() => setSHowHarmburgerMenu(false)} to='/market-insights/$title' params={{ title: addHyphen(title.toLowerCase()) }} className='relative font-Akkurat font-extrabold'>
      <img src={imgUrl} alt={title} className='w-full h-[115px] object-cover' />
      <div className='bg-black/20 absolute top-0 left-0 right-0 bottom-0' />
      <h1 className='absolute top-4 left-4 lg:left-8 text-white text-[1.375rem]'>{title}</h1>
      <ArrowRight color='white' className='absolute bottom-4 left-4 lg:left-8' />
    </Link>
  )
}

export default PortionSelectedCard

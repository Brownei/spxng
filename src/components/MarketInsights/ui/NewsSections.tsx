import { ArrowRight } from 'lucide-react'
import React, { FC } from 'react'

type NewsSectionsProps = {
  news: {
    title: string
    description: string
  },
  index: number
}

const NewsSections: FC<NewsSectionsProps> = ({ news, index }) => {
  return (
    <div className=' flex relative bg-gray-200 min-h-[250px] text-black' key={index}>
      <div className='p-[14px] flex flex-col justify-between'>
        <div>
          <h3 className='line-clamp-3 text-[1.375rem] border  font-Akkurat font-bold'>{news.title}</h3>
          <p className='text-[1rem] line-clamp-3 border tracking-[-0.02em] font-Akkurat font-light'>{news.description}</p>
        </div>
        <ArrowRight size={25} className=' lg:absolute lg:bottom-4 lg:left-[14px]' />
      </div>
    </div>
  )
}

export default NewsSections

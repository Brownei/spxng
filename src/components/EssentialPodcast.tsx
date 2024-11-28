import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'

const EssentialPodcast = () => {
  const podcasts = [
    {
      name: "The Essential Podcast",
      dateRecorded: "2 August 2024",
      title: "Better Faster Farther: Maggie Mertens and the Great Hobbit",
      cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/corporate/the-essential-podcast/Corp_0710_EssentialPodcast_square.png'
    },
    {
      name: "The Essential Podcast",
      dateRecorded: "2 August 2024",
      title: "Better Faster Farther: Maggie Mertens and the Great Hobbit",
      cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/corporate/the-essential-podcast/Corp_0710_EssentialPodcast_square.png'
    },
    {
      name: "The Essential Podcast",
      dateRecorded: "2 August 2024",
      title: "Better Faster Farther: Maggie Mertens and the Great Hobbit",
      cover: 'https://www.spglobal.com/content/dam/spglobal/global-assets/en/images/podcasts/corporate/the-essential-podcast/Corp_0710_EssentialPodcast_square.png'
    },
  ]

  return (
    <div className='grid gap-5 px-5 lg:px-10 mt-[50px]'>
      <div className='font-Akkurat font-bold flex flex-col gap-5 justify-between lg:items-center lg:flex-row'>
        <h1 className='font-Akkurat font-black text-[2.25rem] leading-[2.587rem]'>The Essential Podcast</h1>
        <Link className='flex gap-1 text-red-600 items-center'>
          <span>Listen & Subscribe</span>
          <ChevronRight className='size-[15px]' color='red' />
        </Link>
      </div >

      <div className='flex flex-col gap-[20px] items-center lg:flex-row'>
        {podcasts.slice(0, 3).map((podcast, i) => (
          <div className='' key={i}>
            <div className=' flex flex-row-reverse justify-center lg:justify-start relative items-start gap-1 p-3 lg:p-4 bg-black text-white'>
              <img src={podcast.cover} className=' size-[84px] lg:size-[182px] object-cover' />
              <div className='lg:px-3 grid lg:py-5 gap-3'>
                <span className='text-[0.687rem] line-clamp-3 hidden lg:block leading-[0.894rem]  tracking-[0.1em] uppercase font-Akkurat font-bold'>{podcast.name}</span>
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

export default EssentialPodcast

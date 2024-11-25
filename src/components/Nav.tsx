import { Link } from '@tanstack/react-router'
import { AlignJustify, ChevronDown, Globe, LayoutGrid, MessageCircleQuestion, Search } from 'lucide-react'

const Nav = () => {
  return (
    <nav className='sticky z-50 top-0 left-0 right-0 h-[90px] w-full'>
      <div className='flex bg-white py-3 px-5 justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <div className='relative font-Akkurat font-bold py-1 text-[2rem]'>
            <div className='border-2 border-black w-full absolute top-0 left-0 right-0' />
            <span className='text-red-600'>SPXNG</span>
          </div>
          <Link className='flex gap-1 items-center font-Akkurat font-black'>
            <LayoutGrid className='size-[14px] font-black' fill='#000' />
            <span>Explore SPXNG</span>
          </Link>
        </div>
        <div className='hidden font-Akkurat font-light text-[0.875rem] gap-10 lg:flex'>
          <button className='flex gap-2 items-center'>
            <Search className='size-[14px]' />
            Search
          </button>
          <button className='flex gap-2 items-center'>
            <Globe className='size-[14px]' />
            EN
          </button>
          <Link className='flex gap-1 items-center'>
            <MessageCircleQuestion className='size-[14px]' />
            Support
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <AlignJustify />
        </div>
      </div>
      <div className='hidden drop-shadow-md bg-gray-100 justify-between items-center px-5 py-3 lg:flex'>
        <div className='flex gap-4 items-center font-Akkurat font-black'>
          <button className='flex gap-1 items-center'>
            <span>Find Products</span>
            <ChevronDown className='size-[15px]' />
          </button>
          <button className='flex gap-1 items-center'>
            <span>Research & Insights</span>
            <ChevronDown className='size-[15px]' />
          </button>
          <button className='flex gap-1 items-center'>
            <span>Who We Are</span>
            <ChevronDown className='size-[15px]' />
          </button>
        </div>
        <Link className='py-3 transition-colors px-5 bg-red-600 text-white font-Akkurat font-bold hover:bg-black'>
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

export default Nav

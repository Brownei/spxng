import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

const SpecialReports = () => {
  return (
    <div className='grid gap-5 px-5 lg:px-10 mt-[50px]'>
      <div className='font-Akkurat font-bold flex justify-between items-center '>
        <h1 className='font-Akkurat font-black text-[2.25rem] leading-[2.587rem]'>Special Reports</h1>
        <Link className='flex gap-1 text-red-600 items-center'>
          <span>Read All Special Reports</span>
          <ChevronRight className='size-[15px]' color='red' />
        </Link>
      </div >

      <div className='flex  gap-[20px] items-center'>
        <div className='min-h-[412px]'>
          <div className=' grid gap-1 bg-gray-300'>
            <img src='https://spglobal.scene7.com/is/image/spglobalcom/Corp_1008_LookForwardVolume7?$responsive$' />
            <div className='px-3 grid py-5'>
              <span className='text-[0.687rem] leading-[0.894rem] text-red-500 tracking-[0.1em] uppercase font-Akkurat font-bold'>LOOK FORWARD</span>
              <span className='font-Akkurat font-light text-[0.75rem] leading-[1.05rem]'>16 Oct 2024</span>
              <h3 className='text-[1.375rem] mt-3 leading-[1.575rem] tracking-[-0.02em] font-Akkurat font-bold'>Emerging Markets: A Decisive Decade</h3>
              <p className='font-Akkurat mt-3 font-normal leading-[1.4rem] text-[1rem]'>Emerging markets are strategically positioned to drive global economic growth through the expansion of their domestic markets and to benefit from the reconfiguration of supply chains, trade and investment.</p>
              <ArrowRight className='size-[15px]' />
            </div>
          </div>
        </div>

        <div className='min-h-[412px]'>
          <div className=' grid gap-1 bg-gray-300'>
            <img src='https://spglobal.scene7.com/is/image/spglobalcom/Corp_1008_LookForwardVolume7?$responsive$' />
            <div className='px-3 grid py-5'>
              <span className='text-[0.687rem] leading-[0.894rem] text-red-500 tracking-[0.1em] uppercase font-Akkurat font-bold'>LOOK FORWARD</span>
              <span className='font-Akkurat font-light text-[0.75rem] leading-[1.05rem]'>16 Oct 2024</span>
              <h3 className='text-[1.375rem] mt-3 leading-[1.575rem] tracking-[-0.02em] font-Akkurat font-bold'>Emerging Markets: A Decisive Decade</h3>
              <p className='font-Akkurat mt-3 font-normal leading-[1.4rem] text-[1rem]'>Emerging markets are strategically positioned to drive global economic growth through the expansion of their domestic markets and to benefit from the reconfiguration of supply chains, trade and investment.</p>
              <ArrowRight className='size-[15px]' />
            </div>
          </div>
        </div>

        <div className='min-h-[412px]'>
          <div className=' grid gap-1 bg-gray-300'>
            <img src='https://spglobal.scene7.com/is/image/spglobalcom/Corp_1008_LookForwardVolume7?$responsive$' />
            <div className='px-3 grid py-5'>
              <span className='text-[0.687rem] leading-[0.894rem] text-red-500 tracking-[0.1em] uppercase font-Akkurat font-bold'>LOOK FORWARD</span>
              <span className='font-Akkurat font-light text-[0.75rem] leading-[1.05rem]'>16 Oct 2024</span>
              <h3 className='text-[1.375rem] mt-3 leading-[1.575rem] tracking-[-0.02em] font-Akkurat font-bold'>Emerging Markets: A Decisive Decade</h3>
              <p className='font-Akkurat mt-3 font-normal leading-[1.4rem] text-[1rem]'>Emerging markets are strategically positioned to drive global economic growth through the expansion of their domestic markets and to benefit from the reconfiguration of supply chains, trade and investment.</p>
              <ArrowRight className='size-[15px]' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SpecialReports

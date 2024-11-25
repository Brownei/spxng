import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

const DailyUpdate = () => {
  return (
    <div className='grid gap-5 px-5 lg:px-10 mt-[50px]'>
      <div className='font-Akkurat font-bold flex justify-between items-center '>
        <h1 className='font-Akkurat font-black text-[2.25rem] leading-[2.587rem]'>SXPNG Daily Update</h1>
        <Link className='flex gap-1 text-red-600 items-center'>
          <span>Subscribe</span>
          <ChevronRight className='size-[15px]' color='red' />
        </Link>
      </div>

      <div className='flex gap-[20px]'>
        <div className='lg:w-[25%] w-full grid gap-[30px]'>
          <Link to="/about" className="h-[430px] group relative">
            <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
              <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_1122_DailyUpdateNov22?$responsive$" alt="credit-market" className=" w-full object-cover h-full" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
            </div>
            <div className="absolute top-8 left-6 pr-[1rem] flex flex-col gap-3">
              <h1 className="font-Akkurat z-20 leading-[2.156rem] text-[1.875rem] group-hover:underline font-bold text-white">Aging US Population Leading to Shrinking Labo...</h1>
              <p className="text-white font-Akkurat font-normal text-base leading-[1.4rem]">22 November 2024</p>
            </div>

            <div className="absolute bottom-4 left-4">
              <ArrowRight className="size-[20px]" color="#fff" />
            </div>
          </Link>
        </div>

        <div className='lg:w-[25%] w-full grid gap-[30px]'>
          <Link to="/about" className="h-[430px] relative group">
            <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
              <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_1121_DailyUpdateNov21?$responsive$" alt="credit-market" className=" w-full object-cover h-full" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
            </div>
            <div className="absolute top-8 left-6 pr-[1rem] flex flex-col gap-3">
              <h1 className="font-Akkurat z-20 leading-[2.156rem] text-[1.875rem] group-hover:underline font-bold text-white">The Challenge of Measuring Climate's Economic Impa...</h1>
              <p className="text-white font-Akkurat font-normal text-base leading-[1.4rem]">21 November 2024</p>
            </div>

            <div className="absolute bottom-4 left-4">
              <ArrowRight className="size-[20px]" color="#fff" />
            </div>
          </Link>
        </div>

        <div className='lg:w-[25%] w-full grid gap-[30px]'>
          <Link to="/about" className="h-[430px] relative group">
            <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
              <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_1120_DailyUpdateNov20?$responsive$" alt="credit-market" className=" w-full object-cover h-full" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" />
            </div>
            <div className="absolute top-8 left-6 pr-[1rem] flex flex-col gap-3">
              <h1 className="font-Akkurat z-20 leading-[2.156rem] text-[1.875rem] group-hover:underline font-bold text-white">US Auto Insurance Rates Continue to Increase, But...</h1>
              <p className="text-white font-Akkurat font-normal text-base leading-[1.4rem]">20 November 2024</p>
            </div>

            <div className="absolute bottom-4 left-4">
              <ArrowRight className="size-[20px]" color="#fff" />
            </div>
          </Link>
        </div>

        <div className='lg:w-[25%] w-full grid gap-[30px]'>
          <Link to="/about" className="h-[430px] relative group">
            <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
              <img src="https://spglobal.scene7.com/is/image/spglobalcom/DailyUpdateNov19?$responsive$" alt="credit-market" className=" w-full object-cover h-full" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" />
            </div>
            <div className="absolute top-8 left-6 pr-[1rem] flex flex-col gap-3">
              <h1 className="font-Akkurat z-20 leading-[2.156rem] text-[1.875rem] font-bold text-white group-hover:underline">Allocations to Private Equity Remain High, Despite...</h1>
              <p className="text-white font-Akkurat font-normal text-base leading-[1.4rem]">19 November 2024</p>
            </div>

            <div className="absolute bottom-4 left-4">
              <ArrowRight className="size-[20px]" color="#fff" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default DailyUpdate

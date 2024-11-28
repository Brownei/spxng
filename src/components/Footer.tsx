import { Facebook, InstagramIcon, LinkedinIcon, Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[100px] lg:mt-[200px] mb-[100px] font-Akkurat'>
      <div className='flex flex-col gap-[60px]'>
        <div className='flex gap-5 justify-center items-center text-white bg-black w-full py-3'>
          <span className='font-black text-[1rem] leading-[1.4rem]'>Follow Us</span>
          <Twitter className='size-[17px]' />
          <Facebook className='size-[17px]' />
          <InstagramIcon className='size-[17px]' />
          <YoutubeIcon className='size-[17px]' />
          <LinkedinIcon className='size-[17px]' />
        </div>

        <div className='grid lg:grid-cols-4 px-5 lg:px-10 gap-8 lg:grid-flow-row items-start'>
          <div className='flex flex-col gap-3'>
            <h4 className='font-black text-[0.875rem] leading-[1.225rem]'>Our Purpose</h4>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Our Values</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Our History</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Ventures</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Press</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='font-black text-[0.875rem] leading-[1.225rem]'>Investor Relations</h4>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Overview</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>News Releases</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Quarterly Earnings</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>SEC Filings & Reports</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='font-black text-[0.875rem] leading-[1.225rem]'>Contact Us</h4>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Customer Care & Sales</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Support by Division</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Report an Ethics Concern</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Office Locations</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='font-black text-[0.875rem] leading-[1.225rem]'>Our Organization</h4>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Careers</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Corporate Responsibility</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>Leadership</p>
            <p className='hover:underline cursor-pointer font-extralight text-[0.875rem] leading-[1.225rem]'>IOSCO ESG Rating & Data Product Statements</p>
          </div>

        </div>
        <div className='bg-gray-400 mx-5 lg:mx-10 border-b-2  border-gray-300 ' />

        <div className='mx-5 lg:mx-10 mt-[-30px] flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:items-center'>
          <button className='py-1 px-5 transition-colors text-black hover:bg-black hover:text-white border border-gray-500'>Cookie Settings</button>
          <div className='flex gap-5 font-light text-[0.85rem] flex-wrap items-center'>
            <p className="hover:underline cursor-pointer">Terms of Use</p>
            <p className="hover:underline cursor-pointer">Cookie Notice</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Client Privacy Portal</p>
            <p className="hover:underline cursor-pointer">Do Not Sell or Share My Personal Information</p>
            <p>2024 <span className='font-black'>SXPNG</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

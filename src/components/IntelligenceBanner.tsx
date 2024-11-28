import React from 'react'

const IntelligenceBanner = () => {
  return (
    <div className='bg-gray-100 border border-3 border-transparent min-h-[318px] mt-[20px]'>
      <div className='bg-black mx-5 my-3 lg:mx-10 lg:my-5 min-h-[290px] border-red-400 flex flex-col-reverse justify-end  lg:flex-row-reverse'>
        <div className='text-white p-4 flex flex-col max-w-[440px] justify-center text-start'>
          <h1 className='text-[1.875rem] lg:text-[2.25rem] leading-[-0.02em] font-Akkurat font-bold'>Essential Intelligence for a changing world.</h1>

          <button className='py-3 px-5 bg-red-600 mt-3 transition-colors text-white font-Akkurat font-bold hover:bg-black w-fit'>Seek & Prosper</button>
        </div>

        <img src='https://spglobal.scene7.com/is/image/spglobalcom/deepdive_30_still-96-?$responsive$' alt='Banner' className='object-cover h-[276px]' />
      </div>
    </div>
  )
}

export default IntelligenceBanner

import React from 'react'

const ExploreRiskBanner = () => {
  return (
    <div className='bg-gray-100 border border-3 border-transparent min-h-[318px] mt-[20px]'>
      <div className='bg-black mx-5 my-3 lg:mx-10 lg:my-5 min-h-[290px] border-red-400 flex flex-col-reverse justify-between lg:flex-row'>
        <div className='text-white p-4 flex flex-col max-w-[440px] justify-center text-start'>
          <h1 className='text-[2.25rem] leading-[-0.02em] font-Akkurat font-bold'>Geopolitical Risk is interconnected.</h1>
          <div className='flex flex-col gap-1'>
            <p className='text-[2.25rem] leading-[-0.02em] p-1 w-fit font-Akkurat font-black bg-yellow-300 text-black'>You intelligence should be</p>
            <p className='text-[2.25rem] w-fit leading-[-0.02em] p-1 font-Akkurat font-black bg-yellow-300 text-black'>too.</p>
          </div>

          <button className='py-3 px-5 bg-red-600 mt-3 transition-colors text-white font-Akkurat font-bold hover:bg-black w-fit'>Explore Risks and Impacts</button>
        </div>

        <img src='https://spglobal.scene7.com/is/image/spglobalcom/Corp_0814_geopoliticalriskbanner?$rectangle_large_1376X1834$' alt='Banner' className='object-cover h-[276px]' />
      </div>
    </div>
  )
}

export default ExploreRiskBanner

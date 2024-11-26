
const HeadlineBanner = () => {
  return (
    <div className='bg-gray-100 border border-3 border-transparent min-h-[191px] mt-[60px]'>
      <div className='bg-blue-100 mx-3 my-2 lg:mx-10 lg:my-5 min-h-[191px] flex flex-col-reverse justify-between lg:flex-row'>
        <div className='text-black p-4 flex flex-col max-w-[817px] justify-center text-start'>
          <h1 className='text-[1.875rem] lg:text-[2.25rem] leading-[-0.02em] font-Akkurat font-bold'>Today's Biggest Headlines from SPXNG</h1>
          <p className="font-Akkurat text-[1rem]">Receive our daily newsletter directly in your inbox or via LinkedIn to learn about the big stories impacting our world. Each day, we send you the Essential Intelligence you need to understand the markets shaping your life.</p>

          <button className='py-3 px-5 bg-black mt-3 transition-colors text-white font-Akkurat font-bold hover:bg-black w-full lg:w-fit'>Subscribe on LinkedIn</button>
        </div>

      </div>
    </div>
  )
}

export default HeadlineBanner

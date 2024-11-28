import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

const EnergyTransition = () => {
  const articles = [
    {
      date: "Nov 25, 2024",
      topic: "Air Liquide to build green hydrogen plant for TotalEnergies' La Mede biorefinery"
    },
    {
      date: "Nov 25, 2024",
      topic: "Air Liquide to build green hydrogen plant for TotalEnergies' La Mede biorefinery"
    },
    {
      date: "Nov 25, 2024",
      topic: "Air Liquide to build green hydrogen plant for TotalEnergies' La Mede biorefinery"
    },
    {
      date: "Nov 25, 2024",
      topic: "Air Liquide to build green hydrogen plant for TotalEnergies' La Mede biorefinery"
    },
    {
      date: "Nov 25, 2024",
      topic: "Air Liquide to build green hydrogen plant for TotalEnergies' La Mede biorefinery"
    },
  ]
  return (
    <div className='grid lg:grid-cols-3 lg:grid-flow-row gap-[20px] lg:gap-[40px] items-start px-5 mt-[50px] lg:px-10 '>
      <div className='flex flex-col gap-4 h-fit lg:min-h-[500px] w-full p-3 py-5 font-Akkurat'>
        <h1 className='leading-[2.587rem] tracking-[-0.02em] font-black text-[2.25rem]'>Energy Transition</h1>
        <p className='text-[1.125rem] tracking-[-0.02em] leading-[1.675rem] font-normal'>The heightened urgency of the climate crisis has accelerated calls to action for the global energy industry to shift from fossil-based systems of energy production and consumption—including oil, natural gas, and coal—to renewable energy sources.</p>
        <button className='w-full bg-black text-[0.875rem] leading-[1.225rem] px-[1rem] py-[0.5rem] text-white font-bold'>Read more on the Energy Transition</button>
      </div>

      <div className='flex flex-col gap-2 w-full group relative p-5 lg:pr-10 min-h-[500px]  border text-white bg-black font-Akkurat'>
        <span className='uppercase leading-[0.894rem] tracking-[0.1em] font-bold text-[0.687rem]'>Articles</span>
        <span className='font-normal text-[0.75rem] leading-[1.65rem]'>Nov 25, 2024</span>
        <h1 className='group-hover:underline font-bold tracking-[-0.02em] text-[1.875rem] leading-[2.156rem]'>Intercative: Platts Renewable Energy Price Explorer</h1>
        <p className='text-[1rem] font-normal line-clamp-3 leading-[1.4rem]'>(Latest update: Nov. 25, 2024) Capture prices for solar and wind power output rose in October across Europe as a lull in wind and the seasonal drop in solar coincided with higher gas prices, according to Platts Renewable Energy Price Explorer. In Germany, wind capture prices hit a 2024-high as generation plunged 24% year over year with values almost back at last year’s levels after falling to four-year lows during the summer. In Spain, capture prices remained well below highs seen during the summer as wind and solar output rose year on year, the only such gain amongst Europe’s Big Five markets. The Explorer shows the "capture price" renewable energy generators receive based on hourly output and pricing data on a monthly average basis. As such capture prices take account of the cannibalization effect caused by Europe's growing fleet of solar and wind farms and are a more accurate reflection of value than wholesale power prices. Spanish solar still had the lowest capture rate, but the rate recovered from 68% in September to 80% in October amid the seasonal decline for solar limiting the so-called cannibalization effect. Offshore wind in the UK and Germany captured 91% of the average wholesale power price in October as higher load factors at sea allowing the technology to capture higher prices. Elsewhere, French capture prices remained Europe’s cheapest due to continued oversupply from French nuclear. Overall, European wind and solar power output in October fell to the lowest in 13 months with the Big Five markets down 11% year over year at 39 TWh. For further information, see methodology or contact ci.support@spglobal.com The dial chart shows monthly wind, solar, nuclear, gas and coal-fired generation across Europe's five biggest power markets. Click a segment for more detail.</p>
        <button className='absolute bottom-4 left-5'>
          <ArrowRight />
        </button>
      </div>

      <div className='flex flex-col gap-2 relative px-5 pt-12 pb-6 min-h-[500px]  border text-black font-Akkurat'>
        {articles.map((article, i) => (
          <div key={i} className='grid group gap-3 my-2'>
            <span className='text-[0.75rem] leading-[1.05rem] font-light'>Articles - {article.date}</span>
            <div className='flex justify-between items-center'>
              <h1 className='font-black group-hover:underline cursor-pointer w-[250px] text-[1rem] leading-[1.4rem]'>{article.topic}</h1>
              <ChevronRight className='size-[20px]' />
            </div>
            {i !== articles.length - 1 && (<div className='bg-gray-400  border border-1 border-gray-300' />)}
          </div>
        ))}
      </div>

    </div>
  )
}

export default EnergyTransition

import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import GridHeader from '../components/GridHeader'
import ExploreRiskBanner from '../components/ExploreRiskBanner'
import DailyUpdate from '../components/DailyUpdate'
import HeadlineBanner from '../components/HeadlineBanner'
import SpecialReports from '../components/SpecialReports'
import { Divide } from 'lucide-react'
import MarketInsights from '../components/MarketInsights'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="mb-[500px] h-[1000px]">
      <p>Indices</p>

      <GridHeader />
      <ExploreRiskBanner />
      <DailyUpdate />
      <HeadlineBanner />
      <SpecialReports />
      <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 mx-5 lg:mx-10' />
      <MarketInsights />
      <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 mx-5 lg:mx-10' />

    </div>
  )
}

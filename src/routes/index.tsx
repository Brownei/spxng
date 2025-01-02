import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import GridHeader from '../components/GridHeader'
import ExploreRiskBanner from '../components/ExploreRiskBanner'
import DailyUpdate from '../components/DailyUpdate'
import HeadlineBanner from '../components/HeadlineBanner'
import SpecialReports from '../components/SpecialReports'
import { Divide } from 'lucide-react'
import MarketInsights from '../components/MarketInsights'
import AIInsights from '../components/AIInsights'
import EnergyTransition from '../components/EnergyTransition'
import ClimateBanner from '../components/ClimateBanner'
import IntelligenceBanner from '../components/IntelligenceBanner'
import EssentialPodcast from '../components/EssentialPodcast'
import Footer from '../components/Footer'
import Indices from '../components/Indices'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="mb-[500px] h-[1000px] mt-[1.2rem] lg:mt-[4.5rem]">

      <GridHeader />
      <ExploreRiskBanner />
      <DailyUpdate />
      <HeadlineBanner />
      <SpecialReports />
      <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 mx-5 lg:mx-10' />
      <MarketInsights />
      <div className='bg-gray-400 mt-[60px] border border-1 border-gray-300 mx-5 lg:mx-10' />

      <AIInsights />
      <ClimateBanner inInsights={true} />
      <EnergyTransition />
      <IntelligenceBanner />
      <EssentialPodcast />
      <Footer />
    </div>
  )
}

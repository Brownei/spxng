import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import GridHeader from '../components/GridHeader'
import ExploreRiskBanner from '../components/ExploreRiskBanner'
import DailyUpdate from '../components/DailyUpdate'
import HeadlineBanner from '../components/HeadlineBanner'
import SpecialReports from '../components/SpecialReports'

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
    </div>
  )
}

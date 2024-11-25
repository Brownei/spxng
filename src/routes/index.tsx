import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import GridHeader from '../components/GridHeader'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="h-[1000px]">
      <p>Indices</p>

      <GridHeader />
    </div>
  )
}

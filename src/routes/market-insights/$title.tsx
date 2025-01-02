import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Sustainability from '../../components/MarketInsights/Sustainability'
import Economy from '../../components/MarketInsights/Economy'

export const Route = createFileRoute('/market-insights/$title')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      title: params.title
    }
  }
})

function RouteComponent() {
  const { title } = Route.useLoaderData()
  console.log(title)
  switch (title) {
    case 'sustainability':
      return <Sustainability />
    case 'economy':
      return <Economy />
    default:
      return `Hello /market-insights/${title}!`
  }
}

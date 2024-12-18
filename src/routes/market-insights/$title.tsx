import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Sustainability from '../../components/MarketInsights/Sustainability'

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
  switch (title) {
    case 'sustainability':
      return <Sustainability />
    default:
      return `Hello /market-insights/${title}!`
  }
}

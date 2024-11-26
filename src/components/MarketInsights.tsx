import React from 'react'
import Carousel from './carousel/Carousel'

export type Insights = {
  title: string
  url: string
}

const MarketInsights = () => {
  const insights: Insights[] = [
    {
      title: "Sustainability",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/corp_0416_sustainability_vertical?$responsive$"
    },
    {
      title: "Economy",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/Corp_0416_economyvertical?$responsive$"
    },
    {
      title: "Capital Markets",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/corp_0417_capitalmarketsbannervertical?$responsive$"
    },
    {
      title: "Globe Trade",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/corp_0418_globaltradevertical?$responsive$"
    },
    {
      title: "Energy & Commodities",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/Corp_0416_energycommoditiesvertical?$responsive$"
    },
    {
      title: "Technology & Innovation",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/corp_0417_technologybannervertical?$responsive$"
    },
    {
      title: "Geopolitical Risk",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/corp_0820_geopoliticalrisk_hp2?$responsive$"
    },
    {
      title: "Artificial Intelligence",
      url: "https://spglobal.scene7.com/is/image/spglobalcom/04_16_ArtificialIntelligenceVertical?$responsive$"
    },

  ]
  return (
    <main className='mt-5 px-5 lg:px-10'>
      <h1 className='font-Akkurat font-black text-[2.25rem] leading-[2.587rem]'>Market Insights</h1>
      <Carousel isThereButtons={true} slides={insights} />
    </main>
  )
}

export default MarketInsights

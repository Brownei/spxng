import { Link } from '@tanstack/react-router'
import { Pause } from 'lucide-react'
import React from 'react'
import IndicesCarousel from './carousel/IndicesCarousel'

const Indices = () => {
  const indices = [
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
    {
      name: "EURUSD"
    },
  ]
  return (
    <div className='px-5 lg:px-10'>
      <div className='flex items-center border border-gray-400 p-3'>
        <div>
          <p>INDICES</p>
          <Link className='underline'>Disclaimer</Link>
          <div className='border-r p-5 w-full border-gray-400' />
        </div>
        <IndicesCarousel slides={indices} />
        <Pause />
      </div>
    </div>
  )
}

export default Indices

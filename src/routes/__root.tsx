import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Nav from '../components/Nav'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Nav />
      <div className=' mt-[1rem] lg:mt-[4.5rem]'>
        <Outlet />
      </div>
    </>
  )
}

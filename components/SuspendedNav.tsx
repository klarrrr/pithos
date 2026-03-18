import React, { Suspense } from 'react'
import NavBar from './NavBar'

const SuspendedNav = () => {
  return (
    <Suspense>
        <NavBar/>
    </Suspense>
  )
}

export default SuspendedNav

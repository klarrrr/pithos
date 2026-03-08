import NavBar from '@/components/NavBarAdmin'
import { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='flex-1 w-full flex flex-col gap-20 items-center'>
        <NavBar />
        <main>{children}</main>
    </div>
  )
}

export default layout
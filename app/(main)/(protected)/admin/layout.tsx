import { ReactNode } from 'react'
import SuspendedNav from '@/components/SuspendedNav'
import SellerMainLayout from '@/components/AdminMainLayout'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='h-full w-full flex flex-col items-center'>
        <SuspendedNav/>
        <SellerMainLayout children={children} />
    </div>
  )
}

export default layout
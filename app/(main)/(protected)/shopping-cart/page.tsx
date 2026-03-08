import GoBackBtn from '@/components/GoBackBtn'
import ItemsInCartContainer from '@/components/ItemsInCartContainer'
import NavBar from '@/components/NavBar'
import ShopCheckoutContainer from '@/components/ShopCheckoutContainer'
import { Suspense } from 'react'

const page = () => {
  return (
    <main className='flex flex-col gap-20'>
      <Suspense>
        <NavBar />
      </Suspense>
      
      {/* Content */}

      <div className='flex flex-col gap-2 px-80'>
        <GoBackBtn/>
        <h1 className='font-bold text-4xl'>Your Cart</h1>
        <div className='flex flex-row gap-2 w-full'>
          <ItemsInCartContainer />
          <ShopCheckoutContainer/>
        </div>
      </div>
    </main>
  )
}

export default page

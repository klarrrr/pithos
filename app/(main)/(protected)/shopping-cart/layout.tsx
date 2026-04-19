import NavBar from '@/components/NavBar'
import { ReactNode } from 'react'
import { Suspense } from 'react'
import Footer from '@/components/Footer'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex-1 w-full flex flex-col gap-20 items-center'>
            <Suspense>
                <NavBar />
            </Suspense>
            <main>{children}</main>
            <Suspense>
                <Footer />
            </Suspense>
        </div>
    )
}

export default layout
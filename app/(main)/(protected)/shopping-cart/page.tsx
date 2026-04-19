import { ArrowLeft } from 'lucide-react'
import ItemsInCartContainer from '@/components/ItemsInCartContainer'
import ShopCheckoutContainer from '@/components/ShopCheckoutContainer'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'

const page = () => {
    return (
        <main className='flex flex-col gap-8'>

            {/* Content */}

            <div className='flex flex-col gap-8 px-4 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
                <div className='flex flex-col gap-2 mt-8 lg:mt-0'>
                    {/* Go back */}
                    <Button variant={'red_ghost'} className='self-start'>
                        <ArrowLeft size={16} />
                        Go Back
                    </Button>

                    {/* Your Cart Title */}
                    <h1 className='font-bold text-4xl'>Your Cart</h1>
                </div>

                {/* Items and Checkout Container */}
                <div className='flex flex-col lg:flex-row gap-2 w-full'>
                    <ItemsInCartContainer />
                    <ShopCheckoutContainer />
                </div>

                {/* You might like Title */}
                <h2 className='font-bold text-2xl text-center lg:text-left'>You might like...</h2>

                {/* You might like container... */}

                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2'>
                    <ProductCard
                        title="ROCK & BOULDERS 2"
                        subtitle="Rock and Boulders 2"
                        rating={4.5}
                        reviews={215}
                        author="ArtySlayer"
                        price="Free"
                        imageSrc="/sample-pics/448095782_7941547522555651_2170753001983639848_n.jpg"
                        // Add parameters to link, like the ID of the product or some shit
                        link='/product-detail'
                    />
                    <ProductCard
                        title="ROCK & BOULDERS 2"
                        subtitle="Rock and Boulders 2"
                        rating={4.1}
                        reviews={152}
                        author="Baldo64"
                        price="Free"
                        imageSrc="/sample-pics/458478537_7645885715447813_4009544347800371450_n.jpg"
                        link='/product-detail'
                    />
                    <ProductCard
                        title="ROCK & BOULDERS 2"
                        subtitle="Rock and Boulders 2"
                        rating={4.7}
                        reviews={611}
                        author="Manufactura K4"
                        price="Free"
                        imageSrc="/sample-pics/427910050_10160735009917626_224300477084609345_n.jpg"
                        link='/product-detail'
                    />
                    <ProductCard
                        title="ROCK & BOULDERS 2"
                        subtitle="Rock and Boulders 2"
                        rating={4.7}
                        reviews={611}
                        author="Manufactura K4"
                        price="Free"
                        imageSrc="/sample-pics/427910050_10160735009917626_224300477084609345_n.jpg"
                        link='/product-detail'
                    />
                    <ProductCard
                        title="ROCK & BOULDERS 2"
                        subtitle="Rock and Boulders 2"
                        rating={4.7}
                        reviews={611}
                        author="Manufactura K4"
                        price="Free"
                        imageSrc="/sample-pics/427910050_10160735009917626_224300477084609345_n.jpg"
                        link='/product-detail'
                    />
                </div>

                <Link href={'/product-listing'} className='text-center self-center'>
                    <Button variant={'red_ghost'}>See More...</Button>
                </Link>

            </div>


        </main>
    )
}

export default page

import { Card } from '@/components/ui/card'
import OnboardingBtn from '@/components/OnboardingBtn'
import { PayPal } from '@deemlol/next-icons'
import { Button } from '@/components/ui/button'

const page = () => {
    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4'>
            {/* Header */}
            <h1 className='font-bold text-3xl'>Account Settings</h1>
            <hr />
            {/* Content */}
            <div className='flex gap-4'>
                <div className='flex flex-col gap-4 w-1/4'>
                    <h1 className='font-bold text-2xl'>Payment Methods</h1>
                    <p>Provide a better customer service by setting up a hassle-free online payment method.</p>
                </div>
                <div className='flex flex-col gap-4 w-3/4'>

                    <div className='w-full p-4 bg-primary-foreground border border-muted rounded-lg'>
                        <h2 className='font-semibold flex gap-2 text-xl items-center'><PayPal />PayPal</h2>
                        <ul className='list-disc p-4 px-8'>
                            <li>
                                Help drive conversion by offering customers a seamless checkout experience with no setup monthly fees.
                            </li>
                            <li>
                                A single integrated payment system ensures you stay updated with the latest payment methods.
                            </li>
                            <li>
                                Accept major credit/debit cards and alternative local payment methods through the PayPal wallet.
                            </li>
                        </ul>
                        <OnboardingBtn content='Connect With PayPal' />
                    </div>

                    <div className='w-full p-4 bg-primary-foreground border border-muted rounded-lg'>
                        <h2 className='font-semibold flex gap-2 text-xl items-center'>GCash</h2>
                        <ul className='list-disc p-4 px-8'>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, delectus! Doloribus fugit accusamus impedit expedita eos blanditiis, perspiciatis necessitatibus distinctio eum rerum ipsa nisi aperiam quis atque commodi, earum culpa?
                            </li>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid! Quasi doloremque, delectus pariatur ipsum, animi maxime suscipit ex eligendi ratione error itaque nesciunt est fuga provident magni deleniti ut?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, delectus! Doloribus fugit accusamus impedit expedita eos blanditiis, perspiciatis necessitatibus distinctio eum rerum ipsa nisi aperiam quis atque commodi, earum culpa?
                            </li>
                        </ul>
                        <Button variant={'disabled'}>
                            Connect With GCash
                        </Button>
                    </div>

                </div>
            </div>
            <hr />
        </div>
    )
}

export default page

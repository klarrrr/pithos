import { Card } from "./ui/card"
import { Button } from "./ui/button"
import PaymentLogoCard from "./PaymentLogoCard"
import Link from "next/link"

const ShopCheckoutContainer = () => {
  return (
  <Card className="p-8 justify-between flex flex-col">  

        <div className="flex flex-col gap-4">
          {/* TODO: make dynamic */}
            <div className="flex flex-col">
              <p>Subtotal (2) Items</p>
              <h1 className="font-bold text-2xl">$134.00</h1>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <p>Secure Checkout</p>
            <div className="flex flex-row gap-2">
                <PaymentLogoCard size={48} loc='/payment-logos/visa.jpg' />
                <PaymentLogoCard size={48} loc='/payment-logos/gcash.png' />
                <PaymentLogoCard size={48} loc='/payment-logos/paypal.webp' />
                <PaymentLogoCard size={48} loc='/payment-logos/mastercard.png' />
                <PaymentLogoCard size={48} loc='/payment-logos/grabpay.png' />
                <PaymentLogoCard size={48} loc='/payment-logos/billease.jpg' />
            </div>
            <Link href={'/shopping-cart/checkout'}>
              <Button variant={"red_default"} className="w-full">Proceed To Checkout</Button>
            </Link>
        </div>
    </Card>
  )
}

export default ShopCheckoutContainer

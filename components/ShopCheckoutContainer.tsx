const ShopCheckoutContainer = () => {
  return (
    <div className="rounded-lg p-4 bg-white">  
        <div>
            <p>Subtotal Items</p>
            <h1>$134.00</h1>
            <button>Proceed To Checkout</button>
        </div>

        <div className="flex flex-col gap-2 rounded-lg">
            <p>Secure Checkout</p>
            <div className="flex flex-row gap-2">
                <p>Visa</p>
                <p>GCash</p>
                <p>PayPal</p>
                <p>MasterCard</p>
                <p>Grab Pay</p>
                <p>Billease</p>
            </div>
        </div>
    </div>
  )
}

export default ShopCheckoutContainer

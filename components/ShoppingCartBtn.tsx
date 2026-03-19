import React from 'react'
import { ShoppingCart } from 'lucide-react'

import { Button } from './ui/button'
import Link from 'next/link'

const ShoppingCartBtn = () => {
  return (
    <Link href={`/shopping-cart`}>
      <Button variant="ghost" size={'sm'}>
        <ShoppingCart size={16} className=''/>
        Cart
      </Button>
    </Link>
  )
}

export default ShoppingCartBtn

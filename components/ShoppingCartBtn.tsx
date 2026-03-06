import React from 'react'
import { ShoppingCart } from '@deemlol/next-icons'

const ShoppingCartBtn = () => {
  return (
    <a href="/shopping-cart" className='text-white hover:bg-gray-50 hover:text-black py-2 px-3 rounded-md'>
        <ShoppingCart size={16}/>
    </a>
  )
}

export default ShoppingCartBtn

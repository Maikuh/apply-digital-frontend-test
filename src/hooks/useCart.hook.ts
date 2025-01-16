import { CartContext, CartContextType } from '@/contexts/cart.context'
import { useContext } from 'react'

export default function useCart() {
  const cartContext = useContext(CartContext) as CartContextType

  return cartContext
}

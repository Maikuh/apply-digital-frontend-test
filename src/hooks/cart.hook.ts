import { CartContext, CartContextType } from '@/contexts/cart.context'
import { Game } from '@/utils/endpoint'
import { useContext, useEffect, useMemo } from 'react'

export default function useCart() {
  const [cart, setCart] = useContext(CartContext) as CartContextType
  const total = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.price, 0),
    [cart]
  )

  useEffect(() => {
    const savedCartRaw = localStorage.getItem('cart')

    if (savedCartRaw) {
      const savedCart = JSON.parse(savedCartRaw)

      setCart(savedCart)
    }
  }, [setCart])

  function addToCart(game: Game) {
    const newCart = [...cart, game]

    setCart(newCart)

    localStorage.setItem('cart', JSON.stringify(newCart, null, 2))
  }

  function removeFromCart(gameId: string) {
    const filteredCart = cart.slice().filter((product) => product.id !== gameId)

    setCart(filteredCart)
    localStorage.setItem('cart', JSON.stringify(filteredCart, null, 2))
  }

  return { cart, total, addToCart, removeFromCart }
}

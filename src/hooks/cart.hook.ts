import { Game } from '@/utils/endpoint'
import { useEffect, useState } from 'react'

export default function useCart() {
  const [cart, setCart] = useState<Game[]>([])

  useEffect(() => {
    const savedCartRaw = localStorage.getItem('cart')

    if (savedCartRaw) {
      const savedCart = JSON.parse(savedCartRaw)

      setCart(savedCart)
    }
  }, [])

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

  return { cart, addToCart, removeFromCart }
}

import { Game } from '@/utils/endpoint'
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type CartContextType = {
  cart: Game[]
  total: number
  addToCart: (game: Game) => void
  removeFromCart: (gameId: string) => void
}

export const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<Game[]>([])
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

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

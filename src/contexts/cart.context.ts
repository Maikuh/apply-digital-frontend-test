import { Game } from '@/utils/endpoint'
import { createContext, Dispatch, SetStateAction } from 'react'

export type CartContextType = [Game[], Dispatch<SetStateAction<Game[]>>]

export const CartContext = createContext<CartContextType | null>(null)

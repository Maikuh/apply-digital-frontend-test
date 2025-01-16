'use client'

import { CartContext } from '@/contexts/cart.context'
import { Game } from '@/utils/endpoint'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const cartContext = useState<Game[]>([])
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cartContext}>
        {children}
      </CartContext.Provider>
    </QueryClientProvider>
  )
}

'use client'
import useCart from '@/hooks/cart.hook'
import cx from '@/utils/cx'
import { Game } from '@/utils/endpoint'
import Image from 'next/image'
import React from 'react'
import NewBadge from '../NewBadge'

interface CatalogProps {
  games: Game[]
}

export default function Catalog({ games }: CatalogProps) {
  const { cart, addToCart, removeFromCart } = useCart()

  function handleCartButton(game: Game) {
    if (isGameInCart(game)) removeFromCart(game.id)
    else addToCart(game)
  }

  function isGameInCart(game: Game) {
    return cart.findIndex((item) => item.id === game.id) !== -1
  }

  return (
    <div className="my-12 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <div
          key={game.id}
          className="p-6 rounded-2xl border-stroke-secondary border-[0.5px]"
        >
          <div className="h-60 max-w-80 relative">
            <Image
              src={game.image}
              alt={game.description}
              fill
              className="rounded-t-2xl object-cover"
            />
            {game.isNew && <NewBadge />}
          </div>

          <div>
            <h4 className="text-neutral-500 font-bold mt-5">
              {game.genre.toUpperCase()}
            </h4>

            <div className="flex justify-between font-bold mt-3 text-lg">
              <h4
                className="text-ellipsis overflow-hidden text-nowrap max-w-60"
                title={game.name}
              >
                {game.name}
              </h4>
              <h4>${game.price}</h4>
            </div>
          </div>

          <button
            className={cx(
              'border-[1px] rounded-lg py-5 w-full mt-5 font-bold transition-colors',
              isGameInCart(game)
                ? 'border-red-500 text-red-500'
                : 'border-gray-medium'
            )}
            onClick={() => handleCartButton(game)}
          >
            {isGameInCart(game) ? 'REMOVE' : 'ADD TO CART'}
          </button>
        </div>
      ))}
    </div>
  )
}

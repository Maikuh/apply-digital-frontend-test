'use client'
import Link from 'next/link'
import React from 'react'
import leftArrowIcon from '@/assets/icons/left-arrow-icon.svg'
import closeIcon from '@/assets/icons/close-icon.svg'
import Image from 'next/image'
import useCart from '@/hooks/cart.hook'
import cx from '@/utils/cx'

export default function Cart() {
  const { cart, total, removeFromCart } = useCart()

  return (
    <div className="mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96 my-6">
      <div>
        <Link href="/" className="flex flex-row gap-3 items-center">
          <Image src={leftArrowIcon} alt="Left arrow icon" />
          Back to Catalog
        </Link>
      </div>

      <div className="flex flex-col my-16">
        <h1 className="text-4xl font-bold mb-3 text-gray-medium">Your Cart</h1>
        <h3 className="text-2xl">
          {cart.length} {cart.length !== 1 ? 'items' : 'item'}
        </h3>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-4 w-[55%]">
          {cart.map((game, i) => (
            <div
              key={game.id}
              className={cx(
                'flex flex-row gap-4 px-4 pb-4',
                i !== cart.length - 1 && 'border-b border-stroke-secondary'
              )}
            >
              <div className="h-40 min-w-64 aspect-video relative">
                <Image
                  src={game.image}
                  alt={game.description}
                  fill
                  className="object-cover"
                />
                {game.isNew && (
                  <div className="bg-stone-100 top-3 left-3 z-[9999999] relative max-w-10 flex items-center justify-center rounded px-7 py-1">
                    New
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-neutral-500 font-bold">
                    {game.genre.toUpperCase()}
                  </h4>

                  <button type="button" onClick={() => removeFromCart(game.id)}>
                    <Image src={closeIcon} alt="Remove icon" />
                  </button>
                </div>

                <div>
                  <h3
                    className="text-gray-medium font-bold text-xl text-ellipsis overflow-hidden text-nowrap max-w-60"
                    title={game.name}
                  >
                    {game.name}
                  </h3>

                  <p className="text-neutral-500 line-clamp-2">
                    {game.description}
                  </p>
                </div>

                <div className="flex justify-end items-end h-full">
                  <h3 className="text-gray-medium font-bold text-xl">
                    ${game.price}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 text-primary ml-20 flex-1">
          <div className="border border-stroke-secondary rounded-lg p-4">
            <div className="mb-8 mt-3">
              <h4 className="font-bold text-2xl mb-2">Order Summary</h4>
              <h5>
                {cart.length} {cart.length !== 1 ? 'items' : 'item'}
              </h5>
            </div>

            <div className="border-b border-stroke-secondary pb-4 mb-4">
              {cart.map((game) => (
                <div
                  key={game.id}
                  className="flex flex-row justify-between mb-2"
                >
                  <p className="text-ellipsis overflow-hidden text-nowrap whitespace-nowrap lg:max-w-60 xl:max-w-full">
                    {game.name}
                  </p>
                  <p>$ {game.price}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-between font-bold text-xl mb-8">
              <p>Order Total</p>
              <p>${total}</p>
            </div>
          </div>

          <button
            className="w-full p-4 text-white bg-primary rounded-lg disabled:bg-gray-400 disabled:text-gray-100"
            disabled={!cart.length}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

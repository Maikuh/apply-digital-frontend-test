'use client'
import Link from 'next/link'
import React from 'react'
import leftArrowIcon from '@/assets/icons/left-arrow-icon.svg'
import Image from 'next/image'
import OrderSummary from '@/components/Cart/OrderSummary'
import CartList from '@/components/Cart/CartList'
import useCart from '@/hooks/useCart.hook'

export default function Cart() {
  const { cart, total } = useCart()

  return (
    <div className="mx-8 sm:mx-20 md:mx-32 2xl:mx-60 3xl:mx-96 my-6">
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

      <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start">
        <CartList cart={cart} />

        <OrderSummary cart={cart} total={total} />
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartIcon from '@/assets/icons/cart-icon.svg'

export default function Navbar() {
  return (
    <div className="bg-surface-secondary h-16 flex justify-between items-center px-16">
      <Link href="/" className="text-2xl text-primary font-bold">
        GamerShop
      </Link>
      <Link href="/cart">
        <Image src={cartIcon} alt="Cart Icon" />
      </Link>
    </div>
  )
}

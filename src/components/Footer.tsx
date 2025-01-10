import Image from 'next/image'
import React from 'react'
import adLogo from '@/assets/apply-digital-logo.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gray-medium h-44 flex justify-center items-center">
      <Link href="/">
        <Image src={adLogo} alt="Apply Digital Logo" />
      </Link>
    </div>
  )
}

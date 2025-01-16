'use client'

import Homepage from '@/components/Homepage'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Homepage />
    </Suspense>
  )
}

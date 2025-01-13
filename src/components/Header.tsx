'use client'
import { useQueryClient } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'

interface HeaderProps {
  genres: string[]
  initialGenre?: string
}

export default function Header({ genres, initialGenre }: HeaderProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const queryClient = useQueryClient()

  function handleFilterChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    const params = new URLSearchParams(searchParams)

    if (!value.length) params.delete('genre')
    else params.set('genre', value)

    router.replace(`${pathname}?${params.toString()}`)

    queryClient.invalidateQueries({ queryKey: ['games', value] })
  }

  return (
    <div className="w-full min-h-60 border-b-[1px] border-stroke-tertiary">
      <h1 className="text-3xl font-bold mb-12">Top Sellers</h1>
      <div className="flex justify-end items-center">
        <span className="font-bold border-r-[1px] border-gray-400 pr-3 mr-3">
          Genre
        </span>
        <select
          name="genre"
          id="genre"
          className="min-w-56 h-8"
          onChange={handleFilterChange}
          defaultValue={initialGenre}
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

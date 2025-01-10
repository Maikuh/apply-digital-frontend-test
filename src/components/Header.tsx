import React from 'react'

interface HeaderProps {
  genres: string[]
}

export default function Header({ genres }: HeaderProps) {
  return (
    <div className="w-full min-h-60 border-b-[1px] border-stroke-tertiary">
      <h1 className="text-3xl font-bold mb-12">Top Sellers</h1>
      <div className="flex justify-end items-center">
        <span className="font-bold border-r-[1px] border-gray-400 pr-3 mr-3">
          Genre
        </span>
        <select name="genre" id="genre" className="min-w-56 h-8">
          <option value="all">All</option>
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

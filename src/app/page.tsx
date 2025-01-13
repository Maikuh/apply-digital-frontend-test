'use client'
import Catalog from '@/components/Catalog'
import Header from '@/components/Header'
import { fetchGames } from '@/services/games.service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['games', searchParams.get('genre'), searchParams.get('page')],
    queryFn: ({ queryKey }) =>
      fetchGames({ genre: queryKey[1], page: queryKey[2] }),
    placeholderData: (prev) => prev,
  })

  if (isLoading) return <LoadingSpinner />

  if (isError || !data) return <p>Something went wrong</p>

  return (
    <>
      {isFetching && <LoadingSpinner />}
      <div className="flex min-h-dvh flex-col items-center py-12 text-gray-medium mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96">
        <Header
          genres={data.availableFilters}
          initialGenre={searchParams.get('genre') ?? ''}
        />

        <Catalog games={data.games} />

        {data.currentPage < data.totalPages && (
          <button className="bg-primary rounded-lg py-5 px-6 text-white self-start">
            SEE MORE
          </button>
        )}
      </div>
    </>
  )
}

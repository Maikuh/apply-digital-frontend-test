import { fetchGames } from '@/services/games.service'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'
import Catalog from '../Catalog'
import Header from '../Header'
import LoadingSpinner from '../LoadingSpinner'

export default function Homepage() {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['games', searchParams.get('genre')],
      queryFn: ({ queryKey, pageParam }) =>
        fetchGames({
          genre: queryKey[1],
          page: pageParam.toString(),
        }),
      initialPageParam: 1,
      placeholderData: (prev) => prev,
      getNextPageParam: (lastPage) =>
        lastPage.currentPage === lastPage.totalPages
          ? undefined
          : lastPage.currentPage + 1,
    })

  const games = useMemo(() => data?.pages.flatMap((page) => page.games), [data])

  if (isLoading) return <LoadingSpinner />

  if (isError || !data || !games) return <p>Something went wrong</p>

  return (
    <>
      {isFetching && <LoadingSpinner />}
      <div className="flex min-h-dvh flex-col items-center py-12 text-gray-medium mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96">
        <Header
          genres={data.pages[0].availableFilters}
          initialGenre={searchParams.get('genre') ?? ''}
        />

        <Catalog games={games} />

        {hasNextPage && (
          <button
            className="bg-primary rounded-lg py-5 px-6 text-white self-start disabled:bg-gray-400 disabled:text-gray-100 w-full md:w-auto"
            onClick={() => fetchNextPage()}
            disabled={isFetching || !hasNextPage}
          >
            SEE MORE
          </button>
        )}
      </div>
    </>
  )
}

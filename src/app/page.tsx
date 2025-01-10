import Catalog from '@/components/Catalog'
import Header from '@/components/Header'
import { fetchGames } from '@/services/games.service'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<any>
}) {
  const query = await searchParams
  const { games, availableFilters, currentPage, totalPages } = await fetchGames(
    { genre: query.genre, page: query.page ?? 1 }
  )

  return (
    <div className="flex min-h-dvh flex-col items-center py-12 text-gray-medium mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96">
      <Header genres={availableFilters} initialGenre={query.genre} />

      <Catalog games={games} />

      <button className="bg-primary rounded-lg py-5 px-6 text-white self-start">
        SEE MORE
      </button>
    </div>
  )
}

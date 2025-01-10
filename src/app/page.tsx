import Catalog from '@/components/Catalog'
import Header from '@/components/Header'
import { fetchGames } from '@/services/games.service'

export default async function Home() {
  const { games, availableFilters, currentPage, totalPages } =
    await fetchGames()

  return (
    <div className="flex min-h-dvh flex-col items-center py-12 text-gray-medium mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96">
      <Header genres={availableFilters} />

      <Catalog games={games} />

      <button className="bg-primary rounded-lg py-5 px-6 text-white self-start">
        SEE MORE
      </button>
    </div>
  )
}

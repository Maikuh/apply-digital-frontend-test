import Header from '@/components/Header'
import { fetchGames } from '@/services/games.service'
import Image from 'next/image'

export default async function Home() {
  const { games, availableFilters, currentPage, totalPages } =
    await fetchGames()

  return (
    <div className="flex min-h-dvh flex-col items-center py-12 text-gray-medium mx-8 sm:mx-20 lg:mx-32 2xl:mx-60 3xl:mx-96">
      <Header genres={availableFilters} />

      <div className="my-12 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="p-6 rounded-2xl border-stroke-secondary border-[0.5px]"
          >
            <div className="h-60 max-w-80 relative">
              <Image
                src={game.image}
                alt={game.description}
                fill
                className="rounded-t-2xl object-cover"
              />
              {game.isNew && (
                <div className="bg-stone-100 top-3 left-3 z-[9999999999] relative max-w-10 flex items-center justify-center rounded px-7 py-1">
                  New
                </div>
              )}
            </div>

            <div>
              <h4 className="text-neutral-500 font-bold mt-5">
                {game.genre.toUpperCase()}
              </h4>

              <div className="flex justify-between font-bold mt-3 text-lg">
                <h4
                  className="text-ellipsis overflow-hidden text-nowrap max-w-60"
                  title={game.name}
                >
                  {game.name}
                </h4>
                <h4>${game.price}</h4>
              </div>
            </div>

            <button className="border-[1px] border-gray-medium rounded-lg py-5 w-full mt-5 font-bold">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      <button className="bg-primary rounded-lg py-5 px-6 text-white self-start">
        SEE MORE
      </button>
    </div>
  )
}

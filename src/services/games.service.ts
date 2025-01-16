import { Game } from '@/utils/endpoint'

export interface FetchGamesResponse {
  games: Game[]
  availableFilters: string[]
  totalPages: number
  currentPage: number
}

interface FetchGameProps {
  genre: string | null
  page: string | null
}

export async function fetchGames({
  genre,
  page,
}: FetchGameProps): Promise<FetchGamesResponse> {
  const searchParams = new URLSearchParams()

  if (page) searchParams.set('page', page)
  if (genre) searchParams.set('genre', genre)

  const res = await fetch(
    `${location.origin}/api/games?${searchParams.toString()}`
  )

  return await res.json()
}

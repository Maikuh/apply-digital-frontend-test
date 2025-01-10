import { Game } from '@/utils/endpoint'

export interface FetchGamesResponse {
  games: Game[]
  availableFilters: string[]
  totalPages: number
  currentPage: number
}

export async function fetchGames(): Promise<FetchGamesResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/games`)

  return await res.json()
}

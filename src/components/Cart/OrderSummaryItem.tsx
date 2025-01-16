import { Game } from '@/utils/endpoint'

interface OrderSummaryItemProps {
  game: Game
}

export default function OrderSummaryItem({ game }: OrderSummaryItemProps) {
  return (
    <div className="flex flex-row justify-between mb-2">
      <p className="text-ellipsis overflow-hidden text-nowrap whitespace-nowrap md:max-w-60 xl:max-w-full">
        {game.name}
      </p>
      <p>$ {game.price}</p>
    </div>
  )
}

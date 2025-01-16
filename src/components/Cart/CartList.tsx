import CartListItem from './CartListItem'
import { Game } from '@/utils/endpoint'

interface CartListProps {
  cart: Game[]
}

export default function CartList({ cart }: CartListProps) {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-[55%]">
      {cart.map((game, i) => (
        <CartListItem key={game.id} game={game} index={i} />
      ))}
    </div>
  )
}

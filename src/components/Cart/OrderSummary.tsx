import OrderSummaryItem from './OrderSummaryItem'
import { Game } from '@/utils/endpoint'

interface OrderSummaryProps {
  cart: Game[]
  total: number
}

export default function OrderSummary({ cart, total }: OrderSummaryProps) {
  return (
    <div className="flex flex-col flex-1 gap-8 text-primary mb-2 mt-16 lg:mt-0 lg:ml-12 xl:ml-20 w-full">
      <div className="border border-stroke-secondary rounded-lg p-4">
        <div className="mb-8 mt-3">
          <h4 className="font-bold text-2xl mb-2">Order Summary</h4>
          <h5>
            {cart.length} {cart.length !== 1 ? 'items' : 'item'}
          </h5>
        </div>

        <div className="border-b border-stroke-secondary pb-4 mb-4">
          {cart.map((game) => (
            <OrderSummaryItem key={game.id} game={game} />
          ))}
        </div>

        <div className="flex flex-row justify-between font-bold text-xl mb-8">
          <p>Order Total</p>
          <p>${total}</p>
        </div>
      </div>

      <button
        className="w-full p-4 text-white bg-primary rounded-lg disabled:bg-gray-400 disabled:text-gray-100"
        disabled={!cart.length}
      >
        Checkout
      </button>
    </div>
  )
}

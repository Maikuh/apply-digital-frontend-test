import { Game } from '@/utils/endpoint'
import Image from 'next/image'
import NewBadge from '../NewBadge'
import closeIcon from '@/assets/icons/close-icon.svg'
import useCart from '@/hooks/cart.hook'
import cx from '@/utils/cx'

interface CartListItemProps {
  game: Game
  index: number
}

export default function CartListItem({ game, index }: CartListItemProps) {
  const { cart, removeFromCart } = useCart()

  return (
    <div
      className={cx(
        'flex flex-col md:flex-row gap-4 px-4 pb-4',
        index !== cart.length - 1 && 'border-b border-stroke-secondary'
      )}
    >
      <div className="flex flex-row items-start">
        <div className="h-40 min-w-64 md:h-28 md:min-w-40 xl:h-40 xl:min-w-64 aspect-video relative">
          <Image
            src={game.image}
            alt={game.description}
            fill
            className="object-cover"
          />
          {game.isNew && <NewBadge />}
        </div>

        <button
          className="md:hidden ml-auto mt-2"
          type="button"
          onClick={() => removeFromCart(game.id)}
        >
          <Image src={closeIcon} alt="Remove icon" />
        </button>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-neutral-500 font-bold">
            {game.genre.toUpperCase()}
          </h4>

          <button
            className="hidden md:block"
            type="button"
            onClick={() => removeFromCart(game.id)}
          >
            <Image src={closeIcon} alt="Remove icon" />
          </button>
        </div>

        <div className="w-full max-w-40 xl:max-w-60">
          <h3
            className="text-gray-medium font-bold text-xl text-ellipsis overflow-hidden text-nowrap"
            title={game.name}
          >
            {game.name}
          </h3>

          <p className="text-neutral-500 line-clamp-2">{game.description}</p>
        </div>

        <div className="flex justify-end items-end h-full mt-10 md:mt-4 xl:mt-0">
          <h3 className="text-gray-medium font-bold text-xl">${game.price}</h3>
        </div>
      </div>
    </div>
  )
}

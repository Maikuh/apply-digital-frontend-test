import CartListItem from './CartListItem'
import { CartProvider } from '@/contexts/cart.context'

describe('<CartListItem />', () => {
  it('renders', () => {
    cy.fixture('games').then((games) => {
      const game = games[0]

      cy.intercept(
        '/_next/image?url=%2Fgame-images%2Fcyberpunk2077.jpeg&w=640&q=75',
        {
          fixture: 'cyberpunk2077.jpeg',
        }
      )

      cy.intercept('/_next/static/media/close-icon.82effcd4.svg', {
        fixture: 'close-icon.svg',
      })

      cy.mount(
        <CartProvider>
          <CartListItem game={game} index={1} />
        </CartProvider>
      )

      cy.get('h4').should('have.text', game.genre.toUpperCase())
      cy.get('button > img').should('exist')
      cy.get(`h3[title="${game.name}"]`).should('have.text', game.name)
      cy.get('p').should('have.text', game.description)
      cy.contains('h3', `$${game.price}`).should('exist')

      if (game.isNew) {
        cy.contains('div', 'New').should('exist')
      }
    })
  })
})

import selectors from '../../selectors/selectors.json'
describe('Assertion', () => {
  it('verify assertion', () => {
    cy.visit(selectors.url)

    cy.url().should('include', 'internet')

    cy.url().should('eq', selectors.url)

      .and('not.contain', 'hi')

    cy.get(selectors.reachheading).should('contain', 'Welcome')

    cy.get(selectors.login).click()

    cy.get(selectors.username).type('tomsmith')

    cy.get(selectors.password).type('SuperSecretPassword!')

    cy.get(selectors.signin).click()

    cy.get(selectors.signout).click()
  }
  )
}
)

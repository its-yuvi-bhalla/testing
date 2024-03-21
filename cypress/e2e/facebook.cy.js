describe('Facebook', () => {
  it('Facebook', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid="royal_email"]').type('ishant')
    cy.get('[data-testid="royal_pass"]').type('abc')
    cy.get('[data-testid="royal_login_button"]').click()
  }

  )
}

)

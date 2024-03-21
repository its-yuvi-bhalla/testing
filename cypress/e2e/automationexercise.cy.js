describe('automationexercise', () => {
  it('automation', () => {
    cy.visit('https://www.automationexercise.com/')

    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge').click()
    cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(3) > a').click()
  }

  )
}

)

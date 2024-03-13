import checkbox from '../../selectors/checkbox.json'
describe('check boxes', () => {
  it('checkboxes', () => {
    cy.visit(checkbox.url)

    cy.get(checkbox.checkbox).click()

    cy.get(checkbox.h3).should('not.contain', 'hi')

    cy.get(checkbox.checkbox1).click()

    cy.get(checkbox.checkbox2).click()
  }

  )
}

)

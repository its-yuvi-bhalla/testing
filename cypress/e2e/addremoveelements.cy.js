import elements from '../../selectors/elements.json'
describe('Add remove elements', () => {
  it('Elements', () => {
    cy.visit(elements.url)

    cy.get(elements.addremovelink).click()

    cy.get(elements.h3).should(elements.contain, elements.elements)

    cy.get(elements.button).should(elements.contain, elements.add)

    cy.get(elements.button).click()

    cy.get(elements.added).click()
  })
})

describe('My First Test', () => {
    it('verify title-positive', () => {
      
       cy.visit("https://the-internet.herokuapp.com/")

       cy.get(".heading").should("be.visible")    
    })
  }) 
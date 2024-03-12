describe("Challenging",() =>{
    it("ChallengingDom",() =>{
    
    cy.visit("https://the-internet.herokuapp.com/")
    
    cy.get('[href="/challenging_dom"]').click()
    
    cy.get("h3").should("contain","DOM")
    
    //cy.get(".button").click()

    cy.get(".button.alert").click()

    cy.get(".button.success").click()

   
    
    
    })
    })
describe("check boxes",() =>{
    it("checkboxes",() =>{
    
    cy.visit("https://the-internet.herokuapp.com/")
    
    cy.get('[href="/checkboxes"]').click()
    
    cy.get("h3").should("not.contain","hi")
    
    cy.get('[checked=""]').click() 
    

    cy.get('#checkboxes > :nth-child(1)').click()
    
    
    }
    
    )
    
    
    
    }
    
    )
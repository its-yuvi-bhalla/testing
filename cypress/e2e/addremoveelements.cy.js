describe("Add remove elements",()  =>{

    it("Elements",() =>{

        cy.visit("https://the-internet.herokuapp.com/")

        cy.get('[href="/add_remove_elements/"]').click()

        cy.get("h3").should("contain","Elements")

        cy.get("button").should("contain","Add")

        cy.get("button").click()

        cy.get(".added-manually").click()
 }) 
})
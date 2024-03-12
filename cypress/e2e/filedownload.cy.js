describe("file download",() =>{
it("filedownload",() =>{

cy.visit("https://the-internet.herokuapp.com/")

cy.get('[href="/download"]').click()

cy.get("h3").should("contain","File")

cy.get('[href="download/index.html"]').click()


}

)



}

)
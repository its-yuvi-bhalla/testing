describe("Assertion",() => {

it("verify assertion",() => {

cy.visit("https://the-internet.herokuapp.com/")

cy.url().should("include","internet")

cy.url().should("eq","https://the-internet.herokuapp.com/")

.and("not.contain","hi")

cy.get(".heading").should("contain","Welcome")

cy.get('[href="/login"]').click()

cy.get("input#username").type("tomsmith")

cy.get("input#password").type("SuperSecretPassword!")

cy.get(".fa-sign-in").click()

cy.get(".icon-signout").click()

}
)
}
)
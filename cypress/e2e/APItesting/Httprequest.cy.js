describe('Httprequests', () => {
  it('GET Call', () => {
    cy.request('GET', 'https://the-internet.herokuapp.com/')
      .its('status')
      .should('equal', 200)
  })

  it('POST Call', () => {
    cy.request({
      method: 'POST',
      url: 'https://the-internet.herokuapp.com/',
      body: {
        title: 'Test post',
        body: 'This is post call',
        userId: 1
      }
    })

      .its('status')
      .should('equal', 201)
  })
})

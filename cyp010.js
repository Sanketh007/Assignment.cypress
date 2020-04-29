describe('Login to cypress', () => {
    it('', () => {
      cy.visit('https://www.cypress.io')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.get('nav>a').eq(8).scrollIntoView()
      cy.get('nav>a').eq(8).click({ force: true })
      cy.wait(500)


    })
  })
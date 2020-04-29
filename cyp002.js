describe('Home page load', () => {
    it('Visit cypress website with invalid url', () => {
      cy.visit('https://www.cypress.ion/')
      cy.url().should('eq','https://www.cypress.ion/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
    

    })
  })
describe('Home page load', () => {
    it('Visit cypress website', () => {
      cy.visit('https://www.cypress.io/')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.wait(500)
      

    })
  })
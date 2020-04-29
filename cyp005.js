describe('download cypress', () => {
    it('Visit cypress websit and check for download link', () => {
      cy.visit('https://www.cypress.io/')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.wait(1500)
      cy.contains('Download now').click()
    })
  })
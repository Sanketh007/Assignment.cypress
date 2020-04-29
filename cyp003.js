describe('Checking homepage for component', () => {
    it('clicking "Features" navigates to a new url', () => {
      cy.visit('https://www.cypress.io')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.get('nav>a').eq(1).scrollIntoView()
      cy.get('nav>a').eq(1).click({ force: true })
      cy.url().should('eq','https://www.cypress.io/features')
    })
  })
describe('Login to cypress', () => {
    it('', () => {
      cy.visit('https://www.cypress.io')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.get('nav>a').eq(8).scrollIntoView()
      cy.get('nav>a').eq(8).click({ force: true })
      cy.wait(500)
      cy.visit('https://dashboard.cypress.io/login')
      cy.url().should('eq','https://dashboard.cypress.io/login')
      cy.contains('Log In with GitHub').should('not.visible')
      cy.contains('Log In with Google').should('not.visible')



    })
  })
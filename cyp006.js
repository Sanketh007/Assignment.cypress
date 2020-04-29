describe('Subscribe', () => {
    it('Visit cypress website and subscribe ', () => {
      cy.visit('https://www.cypress.io/')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.wait(1500)
      cy.scrollTo('bottom')
      cy.wait(500)
      cy.get('input[id="email-345a365f-b011-4b67-b50f-a40a5f4f1b12"]').type('sanketh07@gmail.com')
      cy.contains('Subscribe').click()
    })
  })
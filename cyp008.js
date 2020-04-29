describe('Subscribe', () => {
    it('Visit cypress website and subscribe', () => {
      cy.visit('https://www.cypress.io/')
      cy.url().should('eq','https://www.cypress.io/')
      cy.wait(1500)
      cy.contains('Accept Cookies').click()
      cy.scrollTo('bottom')
      cy.wait(1000)
      cy.get('input[id="email-345a365f-b011-4b67-b50f-a40a5f4f1b12"]').type('abc@gmail.com')
      cy.get('.hs-error-msg').scrollIntoView().should('have.text', "Email must be formatted correctly.")
      //cy.contains('Subscribe').click()
    })
  })
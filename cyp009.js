      describe('img existence', () => {
        it('checking for image existence', () => {
          cy.visit('https://www.cypress.io')
          cy.url().should('eq','https://www.cypress.io/')
           cy.wait(1500)
      cy.contains('Accept Cookies').click()
         cy.get('.gatsby-image-wrapper').find('picture').children('img[src="/static/33498b5f95008093f5f94467c61d20ab/05330/cypress-logo.png"]').should('be.visible')
         cy.get('nav>a').eq(1).scrollIntoView()
            cy.get('nav>a').eq(1).click({ force: true })

            
        })
      })
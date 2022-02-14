import { waitForAPI } from "gatsby-cypress/api-handler"

context("Homepage", () => {
    beforeEach(() => {
      cy.visit(`http://localhost:8000`)
      cy.injectAxe()
      
    })
  
    it("has focusable buttons", () => {
      cy.wait(500)
      cy.checkA11y()
    })
  })
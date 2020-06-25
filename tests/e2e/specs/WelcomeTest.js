// https://docs.cypress.io/api/introduction/api.html

describe('Welcome Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to vue-training!')
  })
})

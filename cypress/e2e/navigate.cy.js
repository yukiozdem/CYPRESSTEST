describe('Amazon Website Test (regression)',  () => {
  it('should navigate to Amazon and verify title @regression',{tags: '@regression'}, () => {
   
    // Visit Amazon website
    cy.visit('https://www.amazon.com')

    // Verify that the title includes 'Amazon.com'
    cy.title().should('include', 'Amazon.com')

    // Optional: Add more specific title verification
    // cy.title().should('include', 'Spend less. Smile more.')
  })
})

describe('Navigation Smoke Test', () => {
  it('should navigate through top-level pages', () => {
    cy.visit('/');
    cy.contains('Works').click();
    cy.url().should('include', '/works');

    cy.contains('Genres').click();
    cy.url().should('include', '/genres');

    cy.contains('Media').click();
    cy.url().should('include', '/media-page');

    cy.contains('Quotes').click();
    cy.url().should('include', '/quotes');

    cy.contains('Create').click();
    cy.url().should('include', '/Insert');
  });
});

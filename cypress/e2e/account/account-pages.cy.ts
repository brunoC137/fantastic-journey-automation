
describe('Account Navigation', () => {
  beforeEach(() => {
    cy.loginByApi();
    cy.visit('/myaccount');
  });

  it('should access My Reviews', () => {
    cy.contains('My Reviews').click();
    cy.url().should('include', '/myaccount/reviews');
  });

  it('should access Favorites', () => {
    cy.contains('Favorites').click();
    cy.contains('My Favorites').should('be.visible');
  });

  it('should access Quote Favorites', () => {
    cy.contains('Quote Favorites').click();
    cy.contains('Favorite Quotes').should('be.visible');
  });

  it('should access Quote Lists', () => {
    cy.contains('Quote Lists').click();
    cy.contains('Quote Lists').should('be.visible');
  });

  it('should access Custom Lists', () => {
    cy.contains('Custom Lists').click();
    cy.contains('My Custom Lists').should('be.visible');
  });

  it('should access Reading Goals', () => {
    cy.contains('Reading Goals').click();
    cy.contains('Reading Goals & Stats').should('be.visible');
  });

  it('should access Settings', () => {
    cy.contains('Settings').click();
    cy.contains('Account Settings').should('be.visible');
  });
});

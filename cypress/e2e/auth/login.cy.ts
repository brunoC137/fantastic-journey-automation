import { LoginElements, NavbarElements } from '../../elements';

describe('Login via UI', () => {
  it('logs in successfully with valid credentials', () => {
    cy.visit('/login');
    cy.get(LoginElements.page).should('be.visible');
    cy.get(LoginElements.loginForm).should('be.visible');

    cy.get(LoginElements.loginEmail)
      .clear()
      .type(Cypress.env('TEST_USER_EMAIL'));

    cy.get(LoginElements.loginPassword)
      .clear()
      .type(Cypress.env('TEST_USER_PASSWORD'), { log: false });

    cy.get(LoginElements.loginSubmit).click();

    // After login we leave the login page
    cy.url().should('not.include', '/login');

    // User status appears in navbar
    cy.get(NavbarElements.desktopUserStatus).should('be.visible');
  });

  it('shows an error on invalid credentials', () => {
    cy.visit('/login');
    cy.get(LoginElements.loginEmail).clear().type('wrong@example.com');
    cy.get(LoginElements.loginPassword).clear().type('wrong-password');
    cy.get(LoginElements.loginSubmit).click();

    cy.get(LoginElements.authError).should('be.visible');
  });
});

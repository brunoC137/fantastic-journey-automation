import { AccountElements } from '../../elements';

describe('Login via API shortcut', () => {
  it('logs in via API and opens account dashboard', () => {
    cy.loginByApi();
    cy.visit('/myaccount');

    cy.get(AccountElements.dashboard).should('be.visible');
    cy.get(AccountElements.profileUsername).should('be.visible');
  });
});

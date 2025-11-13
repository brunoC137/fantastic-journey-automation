import {
  AccountElements,
  LibraryElements,
  EngagementsElements,
} from '../../elements';

describe('Account area basic navigation', () => {
  beforeEach(() => {
    cy.loginByApi();
  });

  it('opens dashboard', () => {
    cy.visit('/myaccount');

    cy.get(AccountElements.dashboard).should('be.visible');
    cy.get(AccountElements.profileUsername).should('be.visible');
    cy.get(AccountElements.statLibrary).should('exist');
    cy.get(AccountElements.statReviews).should('exist');
  });

  it('opens Library page', () => {
    cy.visit('/myaccount/library');

    cy.get(LibraryElements.page).should('be.visible');
    cy.get(LibraryElements.filters).should('exist');
    cy.get(LibraryElements.grid).should('exist');
  });

  it('opens Engagements page', () => {
    cy.visit('/myaccount/engagements');

    cy.get(EngagementsElements.page).should('be.visible');
  });
});

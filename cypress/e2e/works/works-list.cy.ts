import { WorksElements } from '../../elements';

describe('Works listing', () => {
  it('shows works grid and cards', () => {
    cy.visit('/works');

    // skeleton may appear first
    cy.get(WorksElements.page).should('be.visible');

    cy.get(WorksElements.skeletonGrid).should('exist');

    // when loaded, we have grid & cards
    cy.get(WorksElements.grid).should('exist');
    cy.get(WorksElements.card).its('length').should('be.greaterThan', 0);
  });

  it('opens work details from card click', () => {
    cy.visit('/works');
    cy.get(WorksElements.grid).should('exist');
    cy.get(WorksElements.card).first().click();

    cy.url().should('match', /\/works\/.+/);
  });
});

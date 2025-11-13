import { MediaTypesElements, WorksElements } from '../../elements';

describe('Media types', () => {
  it('shows media type cards', () => {
    cy.visit('/media-page');

    cy.get(MediaTypesElements.page).should('be.visible');
    cy.get(MediaTypesElements.grid).should('exist');

    cy.get('[data-cy^="media-type-card-"]').its('length').should('be.greaterThan', 0);
  });

  it('opens works list for a media type', () => {
    cy.visit('/media-page');

    cy.get('[data-cy^="media-type-card-"]').first().click();

    cy.url().should('include', '/media/');
    cy.get(WorksElements.page).should('be.visible');
  });
});

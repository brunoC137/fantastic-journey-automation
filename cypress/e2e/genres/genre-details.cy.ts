import { GenreElements, GenreDetailsElements } from '../../elements';

describe('Genres flow', () => {
  it('shows genre cards', () => {
    cy.visit('/genres');
    cy.get(GenreElements.page).should('be.visible');
    cy.get(GenreElements.grid).should('exist');
    cy.get(GenreElements.card).its('length').should('be.greaterThan', 0);
  });

  it('opens genre details from card', () => {
    cy.visit('/genres');
    cy.get(GenreElements.card).first().click();

    cy.url().should('match', /\/genres\/.+/);
    cy.get(GenreDetailsElements.page).should('be.visible');

    // Either works grid or "no works" message
    cy.get('body').then(($body) => {
      if ($body.find(GenreDetailsElements.worksGrid).length) {
        cy.get(GenreDetailsElements.worksGrid).should('be.visible');
      } else {
        cy.get(GenreDetailsElements.noWorks).should('be.visible');
      }
    });
  });
});

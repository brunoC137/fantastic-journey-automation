import { ReviewsElements } from '../../elements';

describe('Reviews page', () => {
  it('shows reviews list and cards', () => {
    cy.visit('/reviews');

    cy.get(ReviewsElements.page).should('be.visible');

    cy.get(ReviewsElements.skeleton).should('exist');

    cy.get(ReviewsElements.list).should('exist');
    cy.get(ReviewsElements.card).its('length').should('be.greaterThan', 0);
  });
});

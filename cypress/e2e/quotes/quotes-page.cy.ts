import { QuotesElements } from '../../elements';

describe('Quotes page', () => {
  it('shows quote groups and cards', () => {
    cy.visit('/quotes');

    cy.get(QuotesElements.page).should('be.visible');

    // skeleton first (optional)
    cy.get(QuotesElements.skeleton).should('exist');

    // then groups/cards
    cy.get(QuotesElements.group).its('length').should('be.greaterThan', 0);
    cy.get(QuotesElements.card).its('length').should('be.greaterThan', 0);
  });

  it('opens reading mode card when present', () => {
    cy.visit('/quotes');

    cy.get('body').then(($body) => {
      if ($body.find(QuotesElements.readingModeCard).length) {
        cy.get(QuotesElements.readingModeCard).first().scrollIntoView().should('be.visible');
      }
    });
  });
});

import {
  HomeElements,
  WorksElements,
  GenreElements,
  MediaTypesElements,
  ReviewsElements,
  QuotesElements,
  InsertElements,
  MenuElements,
} from '../../elements';

describe('Top Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(HomeElements.page).should('be.visible');
  });

  it('navigates to Works page', () => {
    cy.get(MenuElements.works).click();
    cy.url().should('include', '/works');
    cy.get(WorksElements.page).should('be.visible');
    cy.get(WorksElements.grid).should('exist');
  });

  it('navigates to Genres page', () => {
    cy.get(MenuElements.genres).click();
    cy.url().should('include', '/genres');
    cy.get(GenreElements.page).should('be.visible');
    cy.get(GenreElements.grid).should('exist');
  });

  it('navigates to Media Types page', () => {
    cy.get(MenuElements.media).click();
    cy.url().should('include', '/media-page');
    cy.get(MediaTypesElements.page).should('be.visible');
    cy.get(MediaTypesElements.grid).should('exist');
  });

  it('navigates to Reviews page', () => {
    cy.get(MenuElements.reviews).click();
    cy.url().should('include', '/reviews');
    cy.get(ReviewsElements.page).should('be.visible');
  });

  it('navigates to Quotes page', () => {
    cy.get(MenuElements.quotes).click();
    cy.url().should('include', '/quotes');
    cy.get(QuotesElements.page).should('be.visible');
  });

  it('navigates to Insert page', () => {
    cy.get(MenuElements.create).click();
    cy.url().should('include', '/Insert');
    cy.get(InsertElements.pageContainer).should('be.visible');
  });
});

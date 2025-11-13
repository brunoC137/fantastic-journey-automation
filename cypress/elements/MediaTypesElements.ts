export const MediaTypesElements = {
  page: '[data-cy=media-types-page]',
  mainContent: '[data-cy=media-types-main-content]',
  title: '[data-cy=media-types-title]',
  grid: '[data-cy=media-types-grid]',
  
  // Media type cards - dynamic selector
  cardById: (id: string) => `[data-cy=media-type-card-${id}]`,
};

export function apiLogin(email: string, password: string): Cypress.Chainable<string> {
  const apiUrl = Cypress.env("API_URL");
  return cy.request("POST", `${apiUrl}/users/login`, { email, password })
    .then(res => res.body.token);
}
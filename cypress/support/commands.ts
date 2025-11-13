import { apiLogin } from './utils/api';

// Declare custom command type
declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi(email?: string, password?: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginByApi', (email?: string, password?: string) => {
  const userEmail = email || Cypress.env('TEST_USER_EMAIL') || 'test@example.com';
  const userPassword = password || Cypress.env('TEST_USER_PASSWORD') || 'password';
  
  apiLogin(userEmail, userPassword).then(token => {
    window.localStorage.setItem('token', token);
  });
});


import { LoginElements as el } from '../elements/LoginElements';

export class LoginPage {
  visit() { cy.visit('/login'); }
  typeEmail(v) { cy.get(el.email).type(v); }
  typePassword(v) { cy.get(el.password).type(v); }
  submit() { cy.get(el.submit).click(); }
}

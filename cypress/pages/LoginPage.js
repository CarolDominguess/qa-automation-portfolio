class LoginPage {

  acessarLogin() {
    cy.visit('/');
    cy.contains('Signup / Login').click();
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  submeterLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  mensagemErro() {
    return cy.contains('Your email or password is incorrect!');
  }

}

export default new LoginPage();

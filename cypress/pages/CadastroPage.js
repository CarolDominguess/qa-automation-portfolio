class CadastroPage {

  acessarLogin() {
    cy.visit('/');
    cy.contains('Signup / Login').click();
  }

  iniciarCadastro(nome, email) {
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  preencherFormulario() {
    cy.get('#id_gender2').click();
    cy.get('#password').type('testeqanew');

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1999');

    cy.get('#first_name').type('Fernanda');
    cy.get('#last_name').type('Souza');
    cy.get('#address1').type('Rua Teste, 123');
    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('11999999999');
  }

  criarConta() {
    cy.get('[data-qa="create-account"]').click();
  }

}

export default new CadastroPage();

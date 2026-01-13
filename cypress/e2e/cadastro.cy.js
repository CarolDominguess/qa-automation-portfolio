import CadastroPage from '../pages/CadastroPage';

describe('Cadastro de Usuário - Automation Exercise', () => {

  it('Deve criar conta com dados válidos', () => {
    const email = `fernanda${Date.now()}@teste.com`;

    CadastroPage.acessarLogin();
    CadastroPage.iniciarCadastro('Fernanda', email);
    CadastroPage.preencherFormulario();
    CadastroPage.criarConta();

    cy.contains('Account Created!').should('be.visible');
  });

});

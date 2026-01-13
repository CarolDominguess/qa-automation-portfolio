import LoginPage from '../pages/LoginPage';

describe('Login de Usuário - Automation Exercise', () => {

  it('Deve realizar login com dados válidos', () => {
  LoginPage.acessarLogin();
  LoginPage.preencherEmail('testeqanew@email.com'); // <-- seu email real
  LoginPage.preencherSenha('Teste@123');
  LoginPage.submeterLogin();

  cy.contains('Logged in as').should('exist');
});


  it('Não deve permitir login com dados inválidos', () => {
    LoginPage.acessarLogin();
    LoginPage.preencherEmail('emailinvalido@teste.com');
    LoginPage.preencherSenha('senhaerrada');
    LoginPage.submeterLogin();

    LoginPage.mensagemErro().should('be.visible');
  });

});

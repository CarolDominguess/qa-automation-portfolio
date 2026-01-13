import LoginPage from '../pages/LoginPage';
import BuscaPage from '../pages/BuscaPage';
import CarrinhoPage from '../pages/CarrinhoPage';

describe('Fluxo E2E - Login, Busca e Carrinho', () => {

  it('Deve realizar fluxo completo com sucesso', () => {

    // LOGIN
    LoginPage.acessarLogin();
    LoginPage.preencherEmail('testeqanew@email.com');
    LoginPage.preencherSenha('Teste@123');
    LoginPage.submeterLogin();

    cy.contains('Logged in as').should('exist');

    // BUSCA
    BuscaPage.acessarProdutos();
    BuscaPage.buscarProduto('Stylish Dress');
    BuscaPage.validarResultado('Stylish Dress');

    // CARRINHO
    CarrinhoPage.adicionarPrimeiroProduto();
    CarrinhoPage.irParaCarrinho();
    CarrinhoPage.validarProdutoNoCarrinho();

  });

});

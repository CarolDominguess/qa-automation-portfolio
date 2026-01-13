import CarrinhoPage from '../pages/CarrinhoPage';

describe('Carrinho de Compras - Automation Exercise', () => {

  it('Deve adicionar produto ao carrinho com sucesso', () => {
    CarrinhoPage.acessarProdutos();
    CarrinhoPage.adicionarPrimeiroProduto();
    CarrinhoPage.irParaCarrinho();

    CarrinhoPage.validarProdutoNoCarrinho();
  });

});

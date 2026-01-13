import BuscaPage from '../pages/BuscaPage';

describe('Busca de Produto - Automation Exercise', () => {

  it('Deve buscar produto existente com sucesso', () => {
    BuscaPage.acessarProdutos();
    BuscaPage.buscarProduto('Stylish Dress');
    BuscaPage.validarResultado('Stylish Dress');
  });

});

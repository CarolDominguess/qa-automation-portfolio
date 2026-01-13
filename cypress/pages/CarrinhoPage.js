class CarrinhoPage {

  acessarProdutos() {
    cy.visit('/');
    cy.contains('Products').click();
  }

  adicionarPrimeiroProduto() {
    cy.get('.product-image-wrapper')
      .first()
      .trigger('mouseover');

    cy.contains('Add to cart').first().click();
  }

  continuarComprando() {
    cy.contains('Continue Shopping').click();
  }

  irParaCarrinho() {
    cy.contains('View Cart').click();
  }

  validarProdutoNoCarrinho() {
    cy.get('.cart_description').should('exist');
  }

}

export default new CarrinhoPage();

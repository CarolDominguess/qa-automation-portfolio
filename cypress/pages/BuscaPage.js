class BuscaPage {

  acessarProdutos() {
    cy.visit('/');
    cy.contains('Products').click();
  }

  buscarProduto(nomeProduto) {
    cy.get('#search_product').type(nomeProduto);
    cy.get('#submit_search').click();
  }

  validarResultado(nomeProduto) {
    cy.contains(nomeProduto).should('be.visible');
  }

}

export default new BuscaPage();

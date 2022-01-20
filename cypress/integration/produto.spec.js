/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit ('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10
        
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        cy.get('.button-variable-item-XS')
        .click()

        cy.get('.button-variable-item-Green')
        .click()

        cy.get('.quantity')
        .clear()
        .type(quantidade)

        cy.get('.single_add_to_cart_button')
        .click()

        cy.get('.dropdown-toggle > .mini-cart-items')
        .should('contain', quantidade)

        cy.get('.woocommerce-message')
        .should('contain', quantidade +' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos ('Aero Daily Fitness Tee','M', 'Black', 3)

    });   

    it.only('Deve adicionar um produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos ('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 5)

    });   
});
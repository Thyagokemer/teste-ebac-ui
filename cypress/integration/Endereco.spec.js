/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.Usuario, dados.senha)
        })
        
    });
    
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Froberto', 'Gomes', 'caixa', 'Argentina', 'Av hugo chaves', '562', 'Bariloche', 'Chaco', '55845970', '75 98452563', 'foberto@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    
        //cadastro de endereço
    });
});
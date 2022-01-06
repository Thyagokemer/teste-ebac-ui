/// <resference types="cypress" />

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(`aluno_ebac@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.page-title').should('contain' , 'Minha conta')
    });  

    it('deve exbir uma mesagem de erro ao inserir ususario inválidos', () => {
        cy.get('#username').type(`ebac@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    });

    it('deve exbir uma mesagem de erro ao inserir senha inválidos', () => {
        cy.get('#username').type(`aluno_ebac@teste.com`)
        cy.get('#password').type(`teste@teste.55com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li').should ('contain' , 'Erro: A senha fornecida para o e-mail')

    });
});
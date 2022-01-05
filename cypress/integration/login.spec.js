/// <resference types="cypress" />

context('Funcionalidade login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
        cy.get('#username').type(`aluno_ebac@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.page-title').should('contain' , 'Minha conta')
    });  

    it.only('deve exbir uma mesagem de erro ao inserir ususario inválidos', () => {
        cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
        cy.get('#username').type(`ebac@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    });

    it('deve exbir uma mesagem de erro ao inserir senha inválidos', () => {
        cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
        cy.get('#username').type(`aluno_ebac@teste.com`)
        cy.get('#password').type(`teste@teste.55com`)
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li').should ('contain' , 'Erro: A senha fornecida para o e-mail')

    });
});
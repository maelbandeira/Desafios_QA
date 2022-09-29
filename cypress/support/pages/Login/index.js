// acoes de interaçao com a pagina


const el = require('./elements').ELEMENTS;

class Login{
    acessarLogin(){
        cy.visit('https://www.saucedemo.com/');        
    }

    preencherLogin(){
        cy.get(el.username).type('standard_user');
        cy.get(el.password).type('secret_sauce');
        cy.get(el.buttonLogin).click();


         //validar que ao fazer login, o nome Products esteja visivel
         cy.contains('.header_secondary_container', 'Products') 
         .should('be.visible');        
    }

}

export default new Login();
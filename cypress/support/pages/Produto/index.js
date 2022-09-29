// acoes de interaçao com a pagina


const el = require('./elements').ELEMENTS;

class Produto{
    ordenarProduto(){
        cy.get(el.ordenarProduto).click();             
    }  
    
    adicionarProdutosCarrinho(){
        cy.get(el.adicionarProduto1).click();
        cy.get(el.adicionarProduto2).click();
        cy.get(el.buttonCarrinho).click();
    }    

}

export default new Produto();
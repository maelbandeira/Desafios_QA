//comando para auto completar
/// <reference types= "cypress" />

//importando class Login
import Login from "../support/pages/Login";
import Produto from "../support/pages/Produto";

describe('login', () => {

  it('CT001-deve realizar o login', () => {
    Login.acessarLogin();
    Login.preencherLogin();
    
  })

  it('CT002-deve ordenar os produtos pelo preço menor para o maior'),() => {
    Produto.ordenarProduto();   
  }

  it('CT003-deve adicionar produtos no carrinho de compras'),() => {   
    Produto.adicionarProdutosCarrinho();
  }

  it('CT004-deve ir para o  carrinho de compras'),() => {   
    Produto.adicionarProdutosCarrinho();
  }



})
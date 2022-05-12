class CriarUsuario {

    visitar(){
      cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo")
    }

    preencherNome(nome){
      cy.get("#name").type(nome)
    }

    preencherEmail(email){
      cy.get("#email").type(email)
    }

    enviarFormulario(){
      cy.contains("button", "Salvar").click()
    }

    preencherFormulario(nome, email){
      this.preencherNome(nome)
      this.preencherEmail(email)
      this.enviarFormulario()
    }

    verificaMensagemDeErro(mensagemErro){
      console.log("chegou")
      cy.contains(mensagemErro);
    }
}

var criarUsuario = new CriarUsuario();

export {criarUsuario}
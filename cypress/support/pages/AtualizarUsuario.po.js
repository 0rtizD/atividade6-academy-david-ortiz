/// <reference types="cypress" />
class AtualizarUsuario {
    inputEmail = "#userEmail";
    inputNome = "#userName";

    visitar() {
        this.mock()

        cy.visit("")
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email,{force: true});
    }

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome,{force: true});
    }

    clicarEmEditar(){
        cy.contains("button", "Editar").click({force: true})
    }

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click({force: true})
    }
    
    clicarEmVerDetalhes(){
        cy.contains("a", "Ver detalhes").click()
    }

    preencherFormularioESalvar(nome, email) {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users/e1b7435e-23ee-45c1-96ed-fc10e5457897",
        [{
            id:"e1b7435e-23ee-45c1-96ed-fc10e5457897",
            name:"çkjfgs",
            email:"pioute@iutrw.com",
            createdAt:"2022-05-10T18:34:25.064Z",
            updatedAt:"2022-05-10T18:34:25.064Z"
        }])
        
        this.clicarEmVerDetalhes()
        this.clicarEmEditar()
        this.preencherEmail(email)
        this.preencherNome(nome)
        this.clicarEmSalvar();
    }

    verificarMensagemDeErro(mensagemErro) {
        cy.get(".sc-ksZaOG.kseTJf").should("have.text", mensagemErro);
    }

    verificarPopUpDeErro(mensagemErro){
        cy.get(".sc-ciZhAO.gqUhsy p").should("have.text", mensagemErro);
    }

    mock(){
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", 
        [{
            id:"e1b7435e-23ee-45c1-96ed-fc10e5457897",
            name:"çkjfgs",
            email:"pioute@iutrw.com",
            createdAt:"2022-05-10T18:34:25.064Z",
            updatedAt:"2022-05-10T18:34:25.064Z"
        }])
    }
}



var atualizarUsuario = new AtualizarUsuario();

export {atualizarUsuario}
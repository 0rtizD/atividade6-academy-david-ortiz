class RemoverUsuario {
    
    visitar() {
        this.mock()
        cy.visit("");
    }

    mock() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", 
        [{
            id:"e1b7435e-23ee-45c1-96ed-fc10e5457897",
            name:"çkjfgs",
            email:"pioute@iutrw.com",
            createdAt:"2022-05-10T18:34:25.064Z",
            updatedAt:"2022-05-10T18:34:25.064Z"
        }])
    }
    
    clicarEmRemover(){
        cy.get("button[data-test='userDataDelete']").click()
        cy.get(".sc-iTONeN.gBlXkK").click()
    }

    testarVisibilidadeDoModal(){
        cy.contains("Usuário removido!")
    }
}

var removerUsuario = new RemoverUsuario();

export {removerUsuario}
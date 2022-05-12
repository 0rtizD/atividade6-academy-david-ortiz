class ListarUsuarios {
    visitar() {
        cy.visit("")
    }

    mock() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", 
        [])
    }

    verificaListaDeUsuarios(){
        cy.get("#listaUsuarios")
    }

    verificaBotaoDeCriarUsuario(){
        cy.contains("Cadastre um novo usuário")
    }
}

var listarUsuarios = new ListarUsuarios()

export {listarUsuarios}
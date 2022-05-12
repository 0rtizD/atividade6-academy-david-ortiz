import { listarUsuarios } from "../pages/ListarUsuarios.po"


Given("entrei na plataforma", () => {
    listarUsuarios.visitar()
})

Then("visualizo os usuarios", () => {
    listarUsuarios.verificaListaDeUsuarios()
})

Given("acessei a plataforma", () => {
    listarUsuarios.mock()
    listarUsuarios.visitar()
})

When("não há usuários cadastrados", () => {
})

Then("visualizo a opção de cadastrar", () => {
    listarUsuarios.verificaBotaoDeCriarUsuario()
})
import { removerUsuario } from "../pages/RemoverUsuario.po";

Given("acessei a pagina de deletar", () => {
    removerUsuario.visitar();
});

When("clico no botão de deletar", () => {
    removerUsuario.clicarEmRemover();
})

Then("visualizo a mensagem de erro", () => {
    removerUsuario.testarVisibilidadeDoModal()
})




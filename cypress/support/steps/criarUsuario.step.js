import { criarUsuario } from "../pages/CriarUsuario.po";

const novoEMail = Date.now() + "@emaaaaiill.com"
Given("acessei a tela de criar usuario", () => {
    criarUsuario.visitar();
});

When("envio os dados", (tabela) => {
  const dados = tabela.rowsHash();
  dados.email = novoEMail
  criarUsuario.preencherFormulario(dados.nome,dados.email)
});

When("não envio dados validos", (tabela) => {
  const dados = tabela.rowsHash();
  criarUsuario.preencherFormulario(dados.nome,dados.email)
});

Then("o sistema envia a mensagem {string}", (mensagemDeErro) => {
  criarUsuario.verificaMensagemDeErro(mensagemDeErro)
})
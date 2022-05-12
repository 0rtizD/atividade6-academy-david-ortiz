import { atualizarUsuario } from "../pages/AtualizarUsuario.po";

Given("acessei a tela de atualizar usuario", () => {
    atualizarUsuario.visitar();
});

When("envio dados validos", (tabela) => {
    const dados = tabela.rowsHash();

    atualizarUsuario.preencherFormularioELogar(dados.nome, dados.email);
});

Then("visualizo a mensagem {string}", (mensagemErro) => {
    atualizarUsuario.verificarMensagemDeErro(mensagemErro)
})

Then("visualizo o popup de erro com a mensagem {string}", (mensagemErro) => {
  atualizarUsuario.verificarPopUpDeErro(mensagemErro)
})

When("envio dados com email existente", (tabela) => {
    const dados = tabela.rowsHash();
      atualizarUsuario.preencherFormularioELogar(dados.nome, dados.email);
  })

When("envio dados incorretos", (tabela) => {
    const dados = tabela.rowsHash();
      atualizarUsuario.preencherFormularioESalvar(dados.nome, dados.email);
  })

  When("informo nome com mais de 100 caracteres", (tabela) => {
    const dados = tabela.rowsHash();
      atualizarUsuario.preencherFormularioESalvar(dados.nome, dados.email);
  })

When("informo email com mais de 60 caracteres", (tabela) => {
    const dados = tabela.rowsHash();
  
    atualizarUsuario.preencherFormularioESalvar(dados.nome, dados.email);
})

When("o sistema não encontra o id", () =>{
  atualizarUsuario.clicarEmVerDetalhes()
})
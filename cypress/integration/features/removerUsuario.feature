Feature: Remover Usuario
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Scenario: Remover usuario com sucesso
        Given acessei a pagina de deletar
        When clico no botão de deletar
        Then visualizo a mensagem de erro

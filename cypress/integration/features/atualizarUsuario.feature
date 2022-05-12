Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar a pagina de atualizar usuario
        Given acessei a tela de atualizar usuario

    Scenario: Não deve ser possível realizar a alteração sem um id existente
        When o sistema não encontra o id
        Then visualizo o popup de erro com a mensagem "Não foi possível localizar o usuário."

    Scenario: Não deve ser possivel atualizar usuario com e-mail invalido
        When envio dados incorretos
        | nome | nnnnnn |
        | email | jsjsjsj |
        Then visualizo a mensagem "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um nome com mais de 100 caracteres.
        When informo nome com mais de 100 caracteres
        | nome | MussumIpsumcacildsvidislitroabertisSinumtemleiteentãobotaumapingaaícumpadiCopofuradisédisculpadebebadis |
        | email | muriciramalho@email.com |
        Then visualizo a mensagem "Informe no máximo 100 caracteres para o nome"

    Scenario: Não deve ser possível atualizar um email com mais de 60 caracteres.
        When informo email com mais de 60 caracteres
        | nome | mihahaa |
        | email | MussumIpsumcacildsviditisSinumtemleiteentãoédisculpad@bebadis |
        Then visualizo a mensagem "Informe no máximo 60 caracteres para o e-mail"
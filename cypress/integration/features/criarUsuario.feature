Feature: Criar Usuario
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a pagina de criar usuário
        Given acessei a tela de criar usuario

    Scenario: Cadastrar usuario com sucesso
        When envio os dados
        | nome | dhhdhdhd |
        | email   | gxx@w.com |
        Then o sistema envia a mensagem "Usuário salvo com sucesso!"

    Scenario: Não deve ser possivel cadastrar usuario com email incorreto
        When não envio dados validos
        | nome | nnnnnn |
        | email | jsjsjsj |
        Then o sistema envia a mensagem "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário com e-mail já utilizado por outro usuario
        When envio os dados
        | nome | dhhdhdhd |
        | email   | gxx@w.com |
        Then o sistema envia a mensagem "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível cadastrar um nome com mais de 100 caracteres.
        When não envio dados validos
        | nome | MussumIpsumcacildsvidislitroabertisSinumtemleiteentãobotaumapingaaícumpadiCopofuradisédisculpadebebadis |
        | email | muriciramalho@email.com |
        Then o sistema envia a mensagem "Informe no máximo 100 caracteres para o nome"
    
    Scenario: Não deve ser possível cadastrar um email com mais de 60 caracteres.
        When não envio dados validos
        | nome | mihahaa |
        | email | MussumIpsumcacildsviditisSinumtemleiteentãoédisculpad@bebadis |
        Then o sistema envia a mensagem "Informe no máximo 60 caracteres para o e-mail"


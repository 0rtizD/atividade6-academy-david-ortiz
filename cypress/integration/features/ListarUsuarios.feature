Feature: Listar Usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Todos as informações de usuários cadastrados devem ser fornecidas após a consulta.
        Given entrei na plataforma
        Then visualizo os usuarios
    
    Scenario: Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário.
        Given acessei a plataforma
        When não há usuários cadastrados
        Then visualizo a opção de cadastrar
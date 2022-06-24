> Este projeto é uma API para realizar CRUD de Tarefas.

### Requisitos de ambiente
- *Node LTS 16.14.2* - Site para fazer a instalação: https://nodejs.org/pt-br/
- *AdonisJS 4.1.0* - Site para fazer a instalação: https://legacy.adonisjs.com/docs/4.1/installation
- *PostgreSQL*

---
---

    *1* Ajustando o banco de dados:

        1. Após clonar o projeto, crie um arquvio .env dentro da pasta api-estagio
        2. Abra o arquivo .env.example, de CTRL+A e CTRL+C
        3. Abra o arquivo .env e de CTRL+V, configure conforme os dados do seu banco de dados:

            HOST=127.0.0.1
            PORT=3333
            NODE_ENV=development
            APP_URL=http://${HOST}:${PORT}
            CACHE_VIEWS=false
            APP_KEY=
            DB_CONNECTION=pg
            DB_HOST=seuHost
            DB_PORT=suaPorta
            DB_USER=seuUser
            DB_PASSWORD=suaSenha
            DB_DATABASE=seuDatabase
            HASH_DRIVER=bcrypt

        3. Salve o arquivo

    *2* Ajustando o ambiente
        1. Dentro da pasta api-estagio abra um terminal e rode os seguintes comandos um de cada vez:
                npm install
                adonis key:generate
                adonis migration:run
                
            
## Testes
        
        Primeiro é necessário rodar o back-end acessando a pasta api-estagio, estando nessa pasta, rodar o seguinte comando:
        adonis serve --dev

        Para realizar os testes, foi necessário o uso do Insomnia mas pode ser usado o Postman também.
        >> Host e Porta podem mudar conforme sua configuração no arquivo .env
        >> Nos casos de teste aqui apresentados, serão mostrados conforme a minha configuração local
        
        Teste 001 - POST
                No Insomnia:
                        *É LIBERADO ADICIONAR APENAS UMA TAREFA POR VEZ*
                - COM O MÉTODO POST SELECIONADO, colar http://127.0.0.1:3333/registrar
                - NO BODY MARCAR A OPÇÃO DE JSON E ADICIONAR OS SEGUINTES CAMPOS:
                        {
                                "nome_tarefa": "NOME DA TAREFA",
                                "conteudo": "CONTEUDO DA TAREFA", 
                                "nome_autor": "NOME DO AUTOR DA TAREFA"
                        }
                - CLICAR EM SEND
                
                Será mostrado ao lado os dados que foram adicionados
                
        Teste 002 - GET
        
                No Insomnia:
                - COM O MÉTODO GET SELECIONADO e SEM BODY SELECIONADO, colar http://127.0.0.1:3333/ 
                - CLICAR EM SEND
                
                Será mostrado a lista de Tarefas, caso não tenha tarefas adicionadas retornara uma lista vazia
                
        Teste 003 - PUT
        
                No Insomnia:
                - COM O MÉTODO PUT SELECIONADO, colar http://127.0.0.1:3333/editar/:idTarefa
                - NO BODY MARCAR A OPÇÃO JSON E ALTERAR OS CAMPOS ESCOLHIDOS
                        Ex: { 
                                "nome_tarefa": "Testando o PUT"
                            }
                - CLICAR EM SEND
                
               Será mostrado ao lado os dados da tarefa
               
        Teste 004 - DELETE
        
                No Insomnia:
                - COM O MÉTODO DELETE SELECIONADO, colar http://127.0.0.1:3333/deletar/:idTarefa
                - CLICAR EM SEND
                
               Será mostrado ao lado uma mensagem de que a tarefa foi deletada
               

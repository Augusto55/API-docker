> Este projeto é uma API para realizar CRUD de Tarefas.
> Projeto pessoal de estudo por isso não conterá os passos de clone, arquivo .env ou instalação

### Requisitos de ambiente
- *Node LTS 16.14.2* - Site para fazer a instalação: https://nodejs.org/pt-br/
- *AdonisJS 4.1.0* - Site para fazer a instalação: https://legacy.adonisjs.com/docs/4.1/installation
- *PostgreSQL*

---
---

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
               

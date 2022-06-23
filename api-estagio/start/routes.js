'use strict'

const Route = use('Route')

Route.get('/', 'NovaTarefaController.listar')

Route.post('/registrar', 'NovaTarefaController.registroTarefa')

Route.put('/editar/:id', 'NovaTarefaController.editar')

Route.delete('/deletar/:id', 'NovaTarefaController.deletar')
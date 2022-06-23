'use strict'

const Tarefa = use('App/Models/Tarefa')

class NovaTarefaController {
    async registroTarefa({ request, response }){
        try{
            const date = request.only(["nome_tarefa", "conteudo", "nome_autor"])
            const tarefa = await Tarefa.create(date)
            
            return tarefa
        } catch(e) {
            return response.status(500).send({ error: "Falha ao adicionar Tarefa." })
        }
    }

    async listar({ response }){
        try{ 
            const tarefas = await Tarefa.all()
            
            return response.status(200).send(tarefas)
        } catch(e) {
            return response.status(500).send({ error: "Falha ao listar Tarefas." })
        }
    }

    async editar({ params, request }){
        try { 
            const tarefa = await Tarefa.findOrFail(params.id)
            const dataToUpdate = request.only(["nome_tarefa", "conteudo", "nome_autor"]);
            tarefa.merge(dataToUpdate)
            await tarefa.save()

            return tarefa
        } catch(e) {
            return response.status(500).send({ error: 'Falha ao editar Tarefa.' })
        }
    }

    async deletar({ params }){
        try{ 
            const tarefa = await Tarefa.findOrFail(params.id)
            await tarefa.delete()

            return {message: 'Tarefa deletada!'}
        } catch(e) {
            return response.status(500).send({ error: 'Falha ao deletar Tarefa.' })
        }
    }
}

module.exports = NovaTarefaController
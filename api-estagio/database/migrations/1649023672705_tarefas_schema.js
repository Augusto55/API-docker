'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefasSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()
      table.string('nome_tarefa', 80).notNullable().unique()
      table.string('conteudo', 255)
      table.string('nome_autor', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefasSchema

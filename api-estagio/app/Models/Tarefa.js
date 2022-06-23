"use strict"

const Model = use("Model")

class Tarefa extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the tarefa password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async tarefaInstance => {
      if (tarefaInstance.dirty.password) {
        tarefaInstance.password = await Hash.make(tarefaInstance.password)
      }
    })
  }
}

module.exports = Tarefa
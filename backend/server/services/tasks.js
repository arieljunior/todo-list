const mongoose = require('mongoose')
const Schema = mongoose.Schema
const database = require('../database/mongodb')

const ObjectId = Schema.ObjectId

const tasksSchema = new Schema({
  idTask: ObjectId,
  name: String,
  description: String,
  status: String
})

const tasksModel = mongoose.model('tasks', tasksSchema);

const taskService = {
  createTask: async (task) =>{
    task.status = "pending"
    const result = await database.create(task, tasksModel)
    return result
  },
  getTasks: async () => {
    const result = await database.find(tasksModel)
    return result
  },
  doneTask: async (id)=>{
    const result = await database.update({_id: id}, {
      $set: {
        status: "done"
      }
    }, tasksModel)
    return result
  },
  cancelTask: async (id)=>{
    const result = await database.update({_id: id}, {
      $set: {
        status: "canceled"
      }
    }, tasksModel)
    return result
  },
  deleteTask: async (id)=>{
    const result = await database.delete({_id: id}, tasksModel)
    return result
  }
}

module.exports = taskService

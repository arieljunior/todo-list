const routers = require('express').Router()
const taskService = require('../../../services/tasks')

routers.get('/', async (req, res) =>{

    const tasks = await taskService.getTasks()
    
    res.send({data: tasks})
})

routers.post('/', async (req, res) =>{

    const isSaved = await taskService.createTask(req.body)

    res.send({isSaved})
})

routers.put('/done', async (req, res) =>{
    const idTask = req.body.taskId
    console.log(req.body)
    const result = await taskService.doneTask(idTask)
    res.send({isUpdated: result})
})

routers.put('/canceled', async (req, res) =>{
    const idTask = req.body.taskId
    const result = await taskService.cancelTask(idTask)
    res.send({isUpdated: result})
})

routers.delete('/', async (req, res) =>{

    const idTask = req.body.taskId
    const result = await taskService.deleteTask(idTask)
    res.send({isDeleted: result})
})

module.exports = routers
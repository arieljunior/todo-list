import React from 'react'
import {getTasks, changeStatusTaskToDone, changeStatusTaskToCanceled, deleteTask} from '../../services/task.service'
import {ToastsStore} from 'react-toasts'
import TableTask from './presentational/TableTask'

interface PropsTask {

}

interface Task {
    _id: string
    name: string
    description: string
    status: 'done' | 'pending' | 'canceled'
}



export function TaskListContainer(props:PropsTask){
    
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [nameFilter, setNameFilter] = React.useState<string>('')

    const loadTasks = async () => {
        const tasks:any = await getTasks()
        setTasks(tasks.data)
    }

    React.useEffect(() => {
        (async () => {
            loadTasks()
        })()
    }, [])

    const handleDoneTask = async (idTask: string) =>{
        await changeStatusTaskToDone(idTask)
        ToastsStore.success('Tarefa concluída com sucesso')
        loadTasks()
    }
    const handleCancelTask = async (idTask: string) =>{
        await changeStatusTaskToCanceled(idTask)
        ToastsStore.success('Tarefa cancelada com sucesso')
        loadTasks()
    }

    const handleDeleteTask = async (idTask: string) =>{
        await deleteTask(idTask)
        ToastsStore.success('Tarefa escluída com sucesso')
        loadTasks()
    }

    return (
    <TableTask
        handleCancelTask={handleCancelTask}
        handleDeleteTask={handleDeleteTask}
        handleDoneTask={handleDoneTask}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        tasks={tasks}
        />
    )

}
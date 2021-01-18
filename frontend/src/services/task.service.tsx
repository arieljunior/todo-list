import {request} from './request'

interface Task {
    name: string
    description: string
}

export async function getTasks(){
    return request('GET', 'api/task', {})
}

export async function createTask(task: Task){
    return request('POST', 'api/task', task)
}

export async function changeStatusTaskToDone(taskId: string){
    return request('PUT', 'api/task/done', {taskId})
}

export async function changeStatusTaskToCanceled(taskId: string){
    return request('PUT', 'api/task/canceled', {taskId})
}

export async function deleteTask(taskId: string){
    return request('DELETE', 'api/task', {taskId})
}
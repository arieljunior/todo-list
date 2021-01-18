import { TaskListContainer } from '../taskList/TaskListContainer'
import { TaskCreateContainer } from '../taskCreate/TaskCreateContainer'

export const routes = [
    { path: '/', exact: true, component: TaskListContainer},
    { path: '/createTask', exact: true, component: TaskCreateContainer}
]
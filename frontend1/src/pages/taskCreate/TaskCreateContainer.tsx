import React from 'react'
import {Grid} from '@material-ui/core'
import FormCreateTask from './presentational/FormCreateTask'
import {createTask} from '../../services/task.service'
import {ToastsStore} from 'react-toasts'

interface PropsTask {

}

export function TaskCreateContainer(props:PropsTask){
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    
    const handleCreateTask = async () =>{
        await createTask({name, description})
        ToastsStore.success('Tarefa criada com sucesso')
    }
    return (<>
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <FormCreateTask
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    handleCreateTask={handleCreateTask}
                />
            </Grid>
        </Grid>
    </>)

}
// import { makeStyles } from '@material-ui/core/styles'
import {TextField, Grid, Button} from '@material-ui/core'

// const useStyles = makeStyles({
// });

interface PropsFormCreateTask{
  name: string
  setName: (name: string) => void
  description: string
  setDescription: (name: string) => void
  handleCreateTask: () => void
}

export default function FormCreateTask(props: PropsFormCreateTask) {
    // const classes = useStyles();

    return (
        <>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        value={props.name}
                        onChange={event => props.setName(event.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Descrição"
                        variant="outlined"
                        value={props.description}
                        onChange={event => props.setDescription(event.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color={'primary'} onClick={props.handleCreateTask}>Criar tarefa</Button>
                </Grid>
            </Grid>
        </>
    );
}
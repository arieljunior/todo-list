import { makeStyles } from '@material-ui/core/styles'
import {Card, CardActions, CardContent, Button, Typography, ButtonGroup, Grid, TextField } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    textStatus:{
      float: 'right',
      display: 'flex',
      fontSize: '11px'
    },
    iconStatus:{
      marginTop: '25px'
    },
    successColor:{
      color: '#2eb82e'
    },
    pendingColor:{
      color: '#ffbb33'
    },
    canceledColor:{
      color: '#e60000'
    }
});

interface PropsCardTask{
  nameFilter: string
  setNameFilter: (nameFilter: string) => void
  handleDoneTask: (idTask: string) => void
  handleCancelTask: (idTask: string) => void
  handleDeleteTask: (idTask: string) => void
  tasks: any[]
}

export default function CardTask(props: PropsCardTask) {
    const classes = useStyles();

    const doneStatus = <Typography className={classes.textStatus + ' ' + classes.successColor}>Tarefa concluída <CheckCircleIcon className={classes.iconStatus}  fontSize={'small'} /></Typography>
    const pendingStatus = <Typography className={classes.textStatus + ' ' + classes.pendingColor}>Tarefa pendente <WarningIcon className={classes.iconStatus} fontSize={'small'} /></Typography>
    const cancelStatus = <Typography className={classes.textStatus + ' ' + classes.canceledColor}>Tarefa cancelada <CancelIcon className={classes.iconStatus} fontSize={'small'} /></Typography>

    return (
      <Grid container spacing={2}> 
            <Grid item xs={6}>
                <TextField label="Filtrar por nome" value={props.nameFilter} onChange={event=>props.setNameFilter(event.target.value)} />
            </Grid>
        
            <Grid container item spacing={2}>
                {props.tasks.map((task, index)=> {

                    if(props.nameFilter && task.name.indexOf(props.nameFilter) === -1){
                        return ''
                    }
                    
                    return (
                        <Grid key={index} item xs={5}>
                            <Card className={classes.root} variant="outlined">
                              <CardContent>
                                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {task.name}
                                  </Typography>
                                  <Typography variant="body2" component="p">
                                    {task.description}
                                  </Typography>
                                    {task.status === 'done' && doneStatus}
                                    {task.status === 'pending' && pendingStatus}
                                    {task.status === 'canceled' && cancelStatus}
                              </CardContent>
                              <CardActions>
                                  <ButtonGroup variant="text" color="primary" aria-label="contained primary button group">
                                    <Button onClick={() => props.handleDoneTask(task._id)}>Concluir</Button>
                                    <Button onClick={() => props.handleCancelTask(task._id)}>Cancelar</Button>
                                    <Button onClick={() => props.handleDeleteTask(task._id)}>Excluir</Button>
                                  </ButtonGroup>
                              </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    );
}
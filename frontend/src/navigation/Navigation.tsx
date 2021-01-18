import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(window.location.href.indexOf('/createTask') > -1 ? 1 : 0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Inicio" href="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Criar Tarefa" href="/createTask" icon={<AddIcon />} />
    </BottomNavigation>
  );
}
import React from 'react';
import {RouterContainer} from './pages/routeContainer/routeContainer'
import Navigation from './navigation/Navigation'
import {Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts'

const useStyles = makeStyles({
  container: {
      margin: '40px'
  }
})

export default function App (){
  const classes = useStyles()
  return (
    <React.StrictMode>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Navigation />
          </Grid>
          <Grid item xs={12}>
            <RouterContainer />
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
          </Grid>
        </Grid>
      </div>
    </React.StrictMode>
  );
}


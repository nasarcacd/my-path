import React from 'react';
import CircularStatic from '../../components/CircularStaticProgress/circular-static-progress.component';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import Node from '../../components/CircularStaticProgress/node';
import Fab from '@material-ui/core/Fab';
import BackIcon from '@material-ui/icons/ArrowBackTwoTone';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: '3rem',
    marginBottom: '2rem',
    justifyContent: 'center'
  },
}));

const GoalDetail = () => {
  let location = useLocation();
  let history = useHistory();
  let classes = useStyles();

  const data = location.state as Node || []

  return (
    <Container maxWidth='md'>
      <CircularStatic data={data} />
      <Grid className={classes.grid} container>
        <Fab size='large' aria-label='back'>
          <BackIcon color='action' fontSize='large' onClick={history.goBack} />
        </Fab>
      </Grid>
    </Container>
  );
}

export default GoalDetail;

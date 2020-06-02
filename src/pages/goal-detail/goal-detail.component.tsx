import React from 'react';
import CircularStatic from '../../components/circular-static-progress/circular-static-progress.component';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import Node from '../../components/circular-static-progress/node';
import Fab from '@material-ui/core/Fab';
import BackIcon from '@material-ui/icons/ArrowBackTwoTone';
import { Grid } from '@material-ui/core';
import useStyles from './goal-detail.style';

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

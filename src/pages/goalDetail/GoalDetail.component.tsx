import React from 'react';
import CircularStatic from '../../components/CircularStaticProgress/circular-static-progress.component';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import Node from '../../components/CircularStaticProgress/node';
import Fab from '@material-ui/core/Fab';
import BackIcon from '@material-ui/icons/ArrowBackTwoTone';

const GoalDetail = () => {
  let location = useLocation();
  let history = useHistory();

  const data = location.state as Node || []

  return (
    <Container maxWidth="md">
      <Fab size="medium" aria-label="back">
        <BackIcon color='action' fontSize='large'  onClick={history.goBack} />
      </Fab>
      <CircularStatic data={data} />
    </Container>
  );
}

export default GoalDetail;

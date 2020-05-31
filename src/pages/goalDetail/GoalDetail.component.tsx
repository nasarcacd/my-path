import React from 'react';
import CircularStatic from '../../components/CircularStaticProgress/circular-static-progress.component';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import Node from '../../components/CircularStaticProgress/node';

const GoalDetail = () => {
  let location = useLocation();
  const data = location.state as Node || []

  return (
    <Container maxWidth="md">
      <CircularStatic data={data} />
    </Container>
  );
}

export default GoalDetail;

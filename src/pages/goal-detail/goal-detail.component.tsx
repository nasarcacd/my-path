import React from 'react';
import CircularStatic from '../../components/circular-static-progress/circular-static-progress.component';
import Container from '@mui/material/Container';
import { useNavigate, useLocation } from 'react-router-dom';
import Node from '../../components/circular-static-progress/node';
import Fab from '@mui/material/Fab';
import BackIcon from '@mui/icons-material/ArrowBackTwoTone';
import { Grid } from '@mui/material';

const GoalDetail = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const data = location.state as Node || []

  return (
    <Container maxWidth='md'>
      <CircularStatic data={data} />
      <Grid
        container
        sx={{
          marginTop: '3rem',
          marginBottom: '2rem',
          justifyContent: 'center'
        }}
      >
        <Fab size='large' aria-label='back'>
          <BackIcon color='action' fontSize='large' onClick={() => navigate(-1)} />
        </Fab>
      </Grid>
    </Container>
  );
}

export default GoalDetail;

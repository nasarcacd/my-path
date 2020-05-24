import React from 'react';
import CircularStatic from '../../components/CircularStaticProgress/circular-static-progress.component';
import Container from '@material-ui/core/Container';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <CircularStatic />
    </Container>
  );
}

export default HomePage;

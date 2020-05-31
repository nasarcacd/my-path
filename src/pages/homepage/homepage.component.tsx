import React from 'react';
import CircularStatic from '../../components/CircularStaticProgress/circular-static-progress.component';
import Container from '@material-ui/core/Container';
import MyPathContext from '../../containers/my-path.container';

const HomePage = () => {
const myPathData = MyPathContext.useContainer();
  return (
    <MyPathContext.Provider>
        <Container maxWidth="md">
          <CircularStatic data={myPathData} />
        </Container>
    </MyPathContext.Provider> 
  );
}

export default HomePage;

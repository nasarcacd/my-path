import React from 'react';
import PR0GRESS_DATA from '../components/CircularStaticProgress/circular-static-progress.data';
import Node from '../components/CircularStaticProgress/node';
import createContainer from '../utils/create-context.util';

export const useMyPath = () => {
    const [initialData, setInitialData] = React.useState(PR0GRESS_DATA as Node);
    return initialData;
};

const MyPathContext = createContainer(useMyPath);

export default MyPathContext;
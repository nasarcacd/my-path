import React from 'react';
import PR0GRESS_DATA from '../components/circular-static-progress/circular-static-progress.data';
import Node from '../components/circular-static-progress/node';
import createContainer from '../utils/create-context.util';

export const useMyPath = () => {
    const [initialData, setInitialData] = React.useState(PR0GRESS_DATA as Node);
    return initialData;
};

const MyPathContext = createContainer(useMyPath);

export default MyPathContext;
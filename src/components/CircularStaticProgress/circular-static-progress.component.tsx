import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import useStyles from './circular-static-progress.style';
import PR0GRESS_DATA from './circular-static-progress.data';

//type CircularProps = { secondaryNodeColor: string };
 /*{ secondaryNodeColor } : CircularProps*/ 
 
const CircularStatic = () => {
  const classes = useStyles();
  const [data, setData] = React.useState(PR0GRESS_DATA);

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <CircularProgress variant="static" value={data.percentage} size="10rem" />
              <h3>{data.percentage}%</h3>
              <InputLabel className={classes.title}>{data.title}</InputLabel>
            </div>
          </Grid>
          {data.nodes.map((element, index) => 
            <Grid key={index} item xs={12} sm={4}>
              <div className={classes.paper}>
                <CircularProgress className={classes.secondaryNode} variant="static" value={element.percentage} size="7rem" />
                <p>{element.percentage}%</p>
                <p className={classes.span} onClick={() => alert('You Rock!')}>{element.title}</p>
              </div>
            </Grid>    
          )}
        </Grid>
    </div>
  );
}

export default CircularStatic;
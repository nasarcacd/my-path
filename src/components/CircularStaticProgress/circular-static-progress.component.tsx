import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import useStyles from './circular-static-progress.style';
import { Link } from 'react-router-dom';
//import MyPathContext from '../../containers/my-path.container';
import Node from './node';

const CircularStatic = (props: { data: Node }) => {
  const classes = useStyles();
  //const myPathData = MyPathContext.useContainer();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <CircularProgress className={classes.primaryNode} variant="static" value={props.data.percentage} size="10rem" />
              <h3>{props.data.percentage}%</h3>
              <InputLabel className={classes.title}>{props.data.title}</InputLabel>
            </div>
          </Grid>
          {props.data.nodes.map((element, index) => 
            <Grid key={index} item xs={12} sm={4}>
              <div className={classes.paper}>
                <CircularProgress className={classes.secondaryNode} variant="static" value={element.percentage} size="7rem" />
                <p>{element.percentage}%</p>
                <Link to={{pathname: `/goals/${props.data.slug}/${element.slug}`, state: element}}>{element.title}</Link>
              </div>
            </Grid>    
          )}
        </Grid>
    </div>
  );
}

export default CircularStatic;
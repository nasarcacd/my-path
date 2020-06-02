import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomePage from './pages/homepage/homepage.component';
import GoalDetailPage from './pages/goal-detail/goal-detail.component';
import ContactPage from './pages/contact/contact-page.component';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MyPathContext from './containers/my-path.container';
import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeRounded';
import ContactIcon from '@material-ui/icons/ContactSupportSharp';
import LoginIcon from '@material-ui/icons/FaceRounded';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(3),
      },
    },
  }),
);

function App() {
  const classes = useStyles();
 return (
   <ThemeProvider theme={theme}>
     <Router>
      <div>
      <Grid container justify = "center">
        <Typography className={classes.root}>
          <Link to="/">
              <HomeIcon fontSize='large' color='action' />
          </Link>
          <Link to="/contact">
              <ContactIcon fontSize='large' color='action' />
          </Link>
          <Link to="/login">
              <LoginIcon fontSize='large' color='action' />
          </Link>
        </Typography>
      </Grid>
        <Switch>
          <Route path='/goals/:path/:goal'>
            <GoalDetailPage />
          </Route>
          <Route exact path='/'>
            <MyPathContext.Provider>
              <HomePage />
            </MyPathContext.Provider>
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
        </Switch>
      </div> 
    </Router>
   </ThemeProvider>
  );
}


export default App;

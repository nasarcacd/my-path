import React from 'react';
import Typography from '@mui/material/Typography';
import HomePage from './pages/homepage/homepage.component';
import GoalDetailPage from './pages/goal-detail/goal-detail.component';
import ContactPage from './pages/contact/contact-page.component';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MyPathContext from './containers/my-path.container';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeRounded';
import ContactIcon from '@mui/icons-material/ContactSupportSharp';
import LoginIcon from '@mui/icons-material/FaceRounded';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/ui/Theme';

function App() {
 return (
   <ThemeProvider theme={theme}>
     <Router>
      <div>
      <Grid container justifyContent="center">
        <Typography sx={{
          '& > * + *': {
            marginLeft: theme.spacing(3),
          },
        }}>
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
        <Routes>
          <Route path='/goals/:path/:goal' element={<GoalDetailPage />} />
          <Route path='/' element={
            <MyPathContext.Provider>
              <HomePage />
            </MyPathContext.Provider>
          } />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
   </ThemeProvider>
  );
}


export default App;

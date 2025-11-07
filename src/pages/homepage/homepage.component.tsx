import React from 'react';
import CircularStatic from '../../components/circular-static-progress/circular-static-progress.component';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyPathContext from '../../containers/my-path.container';

const HomePage = () => {
  const myPathData = MyPathContext.useContainer();

  return (
    <MyPathContext.Provider>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 4,
        }}
      >
        {/* Hero Section */}
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              py: 6,
              px: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              My Career Path
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              }}
            >
              Track your learning journey and visualize your progress
            </Typography>
          </Box>

          {/* Progress Section */}
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              p: { xs: 2, sm: 3, md: 4 },
              mb: 4,
            }}
          >
            <CircularStatic data={myPathData} />
          </Box>

          {/* Footer Info */}
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.9rem',
              }}
            >
              Click on any goal to view detailed progress and sub-goals
            </Typography>
          </Box>
        </Container>
      </Box>
    </MyPathContext.Provider>
  );
}

export default HomePage;

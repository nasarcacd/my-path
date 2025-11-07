import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Node from './node';

const CircularStatic = (props: { data: Node }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* Main Progress Circle */}
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              py: 3,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                mb: 2,
              }}
            >
              <CircularProgress
                variant="determinate"
                value={props.data.percentage}
                size={180}
                thickness={4}
                sx={{
                  color: '#667eea',
                  filter: 'drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3))',
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: '#667eea',
                    fontWeight: 800,
                  }}
                >
                  {props.data.percentage}%
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#333',
                mt: 2,
              }}
            >
              {props.data.title}
            </Typography>
          </Box>
        </Grid>

        {/* Goal Cards */}
        {props.data.nodes.map((element, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/goals/${props.data.slug}/${element.slug}`}
              state={element}
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    py: 3,
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-flex',
                      mb: 2,
                    }}
                  >
                    <CircularProgress
                      variant="determinate"
                      value={element.percentage}
                      size={120}
                      thickness={4}
                      sx={{
                        color: element.percentage >= 75 ? '#4caf50' : element.percentage >= 50 ? '#667eea' : '#ff9800',
                      }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: '#333',
                        }}
                      >
                        {element.percentage}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#555',
                      mt: 1,
                      minHeight: '2.5em',
                    }}
                  >
                    {element.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CircularStatic;
import { ThemeProvider } from '@emotion/react';
import { Box, Button, Container, createTheme, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import useFirebase from '../../hooks/useFirebase';
import { useHistory } from 'react-router-dom';

const SignInForm = () => {
  const theme = createTheme();
  const history = useHistory();
  const { handleSignIn, handleResetPassword } = useFirebase();
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'));
    const password = data.get('password');
    handleSignIn(email, password);
  };

  // onClick handle change Route
  const changeRoute = () => {
    history.push('/register');
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper sx={{ padding: '27px' }}>
          <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Box
                  >
                    Log In
                  </Box>
                  <Box onClick={() => changeRoute()}>
                    Register
                  </Box>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, padding: '10px' }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button onClick={() => handleResetPassword(email)}>
                    Forgot Passoword
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInForm;
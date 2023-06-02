import React, { useState } from 'react'
import { Box, Typography, Grid, Container, Link as MuiLink, Paper, FormControl, FilledInput, IconButton, InputAdornment, InputLabel, Alert, Snackbar, FormHelperText } from '@mui/material';
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from 'react-router-dom';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { auth, googleProvider } from '../../firebase';
import { ISignUp } from './interface';
import { useFormik } from 'formik';
import { validationsSignUp } from './validation';
import { useAuthCreateUserWithEmailAndPassword, useAuthSignInWithPopup } from '@react-query-firebase/auth';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';

const initialValue: ISignUp = {
  email: '',
  password: '',
  confirmPassword: '',
}

const Register = () => {

  const navigate = useNavigate();

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationsSignUp,
    onSubmit: (values: ISignUp) => {
      handleCreateWithEmail(values);
    }
  });

  const mutationGoogle = useAuthSignInWithPopup(auth, {
    onError(error: any) {
      setError(true);
    },
    onSuccess(userCredential: any) {
      console.log("Valid action code!", userCredential);
      navigate('/');
    },
  });

  const mutation = useAuthCreateUserWithEmailAndPassword(auth, {
    onError(error: any) {
      setError(true);
      setErrorMsg('Your account was not created. Please try again!')
    },
    onSuccess(userCredential: any) {
      console.log("Valid action code!", userCredential);
      navigate('/login');
    },
  });

  const handleCreateWithEmail = (cridentional: ISignUp) => {
    mutation.mutate({ email: cridentional.email, password: cridentional.password });
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setErrorMsg('');
  };

  const signWithGoogle = () => {
    mutationGoogle.mutate({
      provider: googleProvider
    })
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Cheers Dashboard
        </Typography>
        <br />
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <br />
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <FormControl sx={{ marginBottom: 2, width: '100%' }} variant="filled">
            <InputLabel htmlFor="email">Email</InputLabel>
            <FilledInput
              id="email"
              type={'text'}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {(formik.touched.email && Boolean(formik.errors.email)) &&
              <FormHelperText error>{formik.touched.email && formik.errors.email}</FormHelperText>
            }
          </FormControl>

          <FormControl sx={{ marginBottom: 2, width: '100%' }} variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {(formik.touched.password && Boolean(formik.errors.password)) &&
              <FormHelperText error>{formik.touched.password && formik.errors.password}</FormHelperText>
            }
          </FormControl>

          <FormControl sx={{ width: '100%' }} variant="filled">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <FilledInput
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {(formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)) &&
              <FormHelperText error>{formik.touched.confirmPassword && formik.errors.confirmPassword}</FormHelperText>
            }
          </FormControl>

          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={mutation.isLoading}
          >
            Create Account
          </LoadingButton>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <MuiLink component={Link} to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GoogleLoginButton align='center' onClick={signWithGoogle} />
      </Paper>

      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert severity="error" onClose={handleClose}>
          {errorMsg}
        </Alert>
      </Snackbar>

    </Container>
  )
}

export default Register;
import { Box, Typography, FormControlLabel, Checkbox, Grid, Container, Paper, Link as MuiLink, Snackbar, Alert, FilledInput, FormControl, InputLabel, IconButton, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { auth, googleProvider } from '../../firebase';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { ISignIn } from './interface';
import { useFormik } from 'formik';
import { validationsSignIn } from './validation';
import FormHelperText from '@mui/material/FormHelperText';
import { useAuthSignInWithEmailAndPassword, useAuthSignInWithPopup } from "@react-query-firebase/auth";
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { setUserDetails } from '../../store/reducers/userDetails/user.slice';
import { ILoggedInUser } from '../../store/reducers/userDetails/user';
import { useDispatch } from 'react-redux';

const initialValue: ISignIn = {
  email: '',
  password: ''
}

const AuthCard = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationsSignIn,
    onSubmit: (values: ISignIn) => {
      console.log(values)
      handleLoginWithEmail(values);
    }
  });

  const mutationGoogle = useAuthSignInWithPopup(auth, {
    onError(error: any) {
      setError(true);
    },
    onSuccess(userCredential: any) {
      console.log('[userCredential] - ', userCredential);
      generateAndSaveUser(userCredential);
    },
  });

  const mutation = useAuthSignInWithEmailAndPassword(auth, {
    onError(error: any) {
      setError(true);
    },
    onSuccess(userCredential: any) {
      console.log('[userCredential] - ', userCredential);
      generateAndSaveUser(userCredential);
    },
  });

  const handleLoginWithEmail = (cridentional: ISignIn) => {
    mutation.mutate(cridentional);
  }


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  const signWithGoogle = () => {
    mutationGoogle.mutate({
      provider: googleProvider
    })
  }

  const generateAndSaveUser = (userCredential: any) => {

    const user: ILoggedInUser = {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
      accessToken: userCredential.user.accessToken,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
      phoneNumber: userCredential.user.phoneNumber
    }

    console.log('[USER] - ', user);

    dispatch(setUserDetails(user));
    navigate('/');
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
          Sign in
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

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={mutation.isLoading}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <MuiLink component={Link} to="/reset">
                Forgot password?
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink component={Link} to="/register">
                {"Don't have an account? Sign Up"}
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
          Email or Password is incorrect. Please try again!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default AuthCard;
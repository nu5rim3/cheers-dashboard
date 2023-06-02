import { Box, Typography, Container, Paper, Snackbar, Alert, FormControl, FilledInput, FormHelperText, InputLabel, AlertColor } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { IReset } from './interface';
import { validationsReset } from './validation';
import { useAuthSendPasswordResetEmail } from '@react-query-firebase/auth';
import { auth } from '../../firebase';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

const initialValue: IReset = {
  email: '',
}

const Reset = () => {

  const navigate = useNavigate();

  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [snackMsg, setSnackMsg] = useState<string>('');
  const [snackType, setSnackType] = useState<AlertColor>('error');

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationsReset,
    onSubmit: (values: IReset) => {
      handleResetAccount(values);
    }
  });

  const mutation = useAuthSendPasswordResetEmail(auth, {
    onError(error: any) {
      setOpenSnack(true);
      setSnackType('error');
      setSnackMsg('Somthing went wrong. Please try again!');
    },
    onSuccess(userCredential: any) {
      console.log("Valid action code!", userCredential);
      setOpenSnack(true);
      setSnackType('success')
      setSnackMsg('Check your Email to reset your password!');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    },
  });

  const handleResetAccount = (cridentional: IReset) => {
    mutation.mutate(cridentional);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

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
          Reset you Account
        </Typography>
        <br />
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <FormControl sx={{ width: '100%' }} variant="filled">
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

          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={mutation.isLoading}
          >
            Send an Email
          </LoadingButton>
        </Box>
      </Paper>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert severity={snackType} onClose={handleClose}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Reset;
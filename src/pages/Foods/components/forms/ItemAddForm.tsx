import { Formik, useFormik } from 'formik';
import React from 'react'
import validationSchema from '../../validation/validationSchema';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';


// TODO: add remaining feilds then remove the comment in the validation. validation error msg must be handle

const initialValues: IFood = {
  name: '',
  description: '',
  image: '',
  potion: 'L',
  serves: undefined,
  category: 'VEG',
  type: 'SNACK',
  price: undefined,
  discountAmount: undefined,
  origin: 'SRILANKAN',
  availability: 'BREAKFAST',
  additions: 'CHEESE',
  isSpecial: false,
  isActive: false
}

interface ItemAddFormProps {
  onSubmit: () => void
}

const ItemAddForm: React.FC<ItemAddFormProps> = ({ onSubmit }) => {

  const theme: any = useTheme();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      uploadItem(values)
    },
  });

  const uploadItem = (value: IFood) => {
    console.log('[FUNC] - uploadItem - ', value)
    onSubmit()
  }

  return (
    <Box p={theme.spacing(2)}>
      <Paper elevation={2}>
        <Box component={"form"} onSubmit={formik.handleSubmit} p={theme.spacing(3, 4)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoFocus
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='number'
                fullWidth
                id="serves"
                name="serves"
                label="Serves"
                value={formik.values.serves}
                onChange={formik.handleChange}
                error={formik.touched.serves && Boolean(formik.errors.serves)}
                helperText={formik.touched.serves && formik.errors.serves}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='number'
                fullWidth
                id="price"
                name="price"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='number'
                fullWidth
                id="discountAmount"
                name="discountAmount"
                label="Discount"
                value={formik.values.discountAmount}
                onChange={formik.handleChange}
                error={formik.touched.discountAmount && Boolean(formik.errors.discountAmount)}
                helperText={formik.touched.discountAmount && formik.errors.discountAmount}
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default ItemAddForm;
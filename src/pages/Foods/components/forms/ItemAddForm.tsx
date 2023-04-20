import { useFormik } from 'formik';
import React from 'react'
import validationSchema from '../../validation/validationSchema';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import GroupCheckBox from '../../../../components/GroupCheckBox';


// TODO: add remaining feilds then remove the comment in the validation. validation error msg must be handle

const initialValues: IFood = {
  name: '',
  description: '',
  image: '',
  potions: [],
  serves: 1,
  category: [],
  type: 'SNACK',
  price: 0,
  discountAmount: 0,
  origin: [],
  availability: [],
  additions: [],
  isSpecial: false,
  isActive: false
}

interface ItemAddFormProps {
  onSubmit: () => void
}

const ItemAddForm: React.FC<ItemAddFormProps> = ({ onSubmit }) => {

  const theme: any = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

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
        <Box p={theme.spacing(3, 4)}>
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={6} sm={2} md={2} lg={1}>
                <GroupCheckBox 
                  data={["S", "M", "L"]}
                  error={formik.touched.potions && Boolean(formik.errors.potions)}
                  errorMessage={formik.touched.potions && formik.errors.potions}
                  handleChange={formik.handleChange}
                  required={true}
                  label={'Potion'}
                />
              </Grid>

              <Grid item xs={6} sm={2} md={2} lg={1}>
                <GroupCheckBox 
                  data={["Veg", "Non-veg", "Vegan"]}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  errorMessage={formik.touched.category && formik.errors.category}
                  handleChange={formik.handleChange}
                  required={true}
                  label={'Category'}
                />
              </Grid>

              <Grid item xs={12} sm={8} md={8} lg={4}>
                <GroupCheckBox 
                  data={["Sri Lankan", "Indian", "Chinese", "Thai", "Japanese", "Mongolian", "Italian", "British", "Indonesian", "None"]}
                  error={formik.touched.origin && Boolean(formik.errors.origin)}
                  errorMessage={formik.touched.origin && formik.errors.origin}
                  handleChange={formik.handleChange}
                  required={true}
                  label={'Origin'}
                  row={true}
                />
              </Grid>
              {mdMatch ?
                <>
                  <Grid item md={8} lg={10} />
                  <Grid container item spacing={1} md={4} lg={2} display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
                    <Grid item md={6} lg={6}>
                      <Button
                        color="primary"
                        variant="outlined"
                        fullWidth
                        type="reset"
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid item md={6} lg={6}>
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </>
                :
                <>
                  <Grid item xs={12} sm={6}>
                    <Button
                      color="primary"
                      variant="outlined"
                      fullWidth
                      type="reset"
                    >
                      Clear
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </>}
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  )
}

export default ItemAddForm;
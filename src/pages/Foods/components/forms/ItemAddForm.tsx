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
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import FormControl from '@mui/material/FormControl/FormControl';
import Checkbox from '@mui/material/Checkbox/Checkbox';


// TODO: add remaining feilds then remove the comment in the validation. validation error msg must be handle

const initialValues: IFood = {
  name: '',
  description: '',
  image: '',
  potions: [],
  serves: 1,
  category: [],
  type: [],
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
    onReset: (values) => {
      console.log(values)
    }
  });

  const uploadItem = (value: IFood) => {
    console.log('[FUNC] - uploadItem - ', value)
    // onSubmit()
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

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'additions'}
                      data={["All", "Cheese", "Spicy", "No Cheese", "No Spicy", "None"]}
                      error={formik.touched.additions && Boolean(formik.errors.additions)}
                      errorMessage={formik.touched.additions && formik.errors.additions}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Additions'}
                      values={formik.values.additions}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'potions'}
                      data={["All", "S", "M", "L", "XL", "None"]}
                      error={formik.touched.potions && Boolean(formik.errors.potions)}
                      errorMessage={formik.touched.potions && formik.errors.potions}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Potion'}
                      values={formik.values.potions}
                    />
                  </Box>
                </Paper>
              </Grid>


              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'category'}
                      data={["All", "Veg", "Non-veg", "Vegan", "None"]}
                      error={formik.touched.category && Boolean(formik.errors.category)}
                      errorMessage={formik.touched.category && formik.errors.category}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Category'}
                      values={formik.values.category}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'availability'}
                      data={["All", "Breakfast", "Lanch", "Dinner", "None"]}
                      error={formik.touched.availability && Boolean(formik.errors.availability)}
                      errorMessage={formik.touched.availability && formik.errors.availability}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Availability'}
                      values={formik.values.availability}
                    />
                  </Box>
                </Paper>
              </Grid>



              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper variant='outlined'>
                  image uplading
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'type'}
                      data={["Snack", "Main", "Soup", "Dessert", "Rice", "Noodles", "Burger", "Pasta", "Pizza", "Wrap", "Staters", "Bite", "Platter", "Salad", "Bread", "Sandwitch"]}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      errorMessage={formik.touched.type && formik.errors.type}
                      handleChange={formik.handleChange}
                      row={true}
                      required={true}
                      label={'Type'}
                      values={formik.values.type}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'origin'}
                      data={["Sri Lankan", "Chinese", "Indian", "Mongolian", "Thai", "Japanese", "Italian", "Indonesian", "British", "None"]}
                      error={formik.touched.origin && Boolean(formik.errors.origin)}
                      errorMessage={formik.touched.origin && formik.errors.origin}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Origin'}
                      row={true}
                      values={formik.values.origin}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={4}>
                <FormGroup row>
                  <FormControlLabel control={<Switch name={'isSpecial'} onChange={formik.handleChange} />} label="Special" />
                  <FormHelperText error={formik.touched.isSpecial && Boolean(formik.errors.isSpecial)}>{formik.touched.isSpecial && formik.errors.isSpecial}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isActive'} onChange={formik.handleChange} />} label="Active" />
                  <FormHelperText error={formik.touched.isActive && Boolean(formik.errors.isActive)}>{formik.touched.isActive && formik.errors.isActive}</FormHelperText>
                </FormGroup>
              </Grid>

            </Grid>

            {mdMatch ?
              <Grid container>
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
              </Grid>
              :
              <Grid container spacing={1} mt={1}>
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
              </Grid>}

          </form>
        </Box>
      </Paper>
    </Box>
  )
}

export default ItemAddForm;
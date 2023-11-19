import React, { memo, useState } from 'react'
import { ProfileProps, IProfile } from '../../interface';
import { useTheme } from '@emotion/react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Paper, Switch, TextField, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import validationSchema from '../validation/validationSchema';
import GroupCheckBox from '../../../../components/GroupCheckBox';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const initialValues: IProfile = {
  name: '',
  description: '',
  type: [],
  contact: 0,
  email: '',
  website: '',
  imageLogo: null,
  imageLocation: null,
  location: '',
  isAlcohol: false,
  paymenentOption: [],
  dressCode: [],
  cuisines: [],
  isParking: false,
  isByob: false,
  isSmokingArea: false,
  isPublicHoliday: false,
  openTime: dayjs('2022-04-17T8:00'),
  closeTime: dayjs('2022-04-17T24:00'),
  barCloseTime: dayjs('2022-04-17T21:00'),
  isActive: false
}

const AddProfile: React.FC<ProfileProps> = memo(({ id, onCreate, onUpdate }) => {

  const theme: any = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageLocationUrl, setImageLocationUrl] = useState<string[]>([]);
  const [isBarClose, setIsBarClose] = useState<boolean>(true);

  const isAddMode = !id;

  useEffect(() => {
    if (!isAddMode) {
      loadProfile(id);
    }
  }, [id, isAddMode])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onFormSubmit(values)
    },
    onReset: (values) => {
      console.log(values)
    }
  });

  const onFormSubmit = (fields: IProfile) => {
    if (isAddMode) {
      createItem(fields);
    } else {
      updateItem(id, fields);
    }
  }

  // create function
  const createItem = (value: IProfile) => {
    console.log('[FUNC] - createItem - ', value)
    onCreate(value);
  }

  // update function
  const updateItem = (id: string, value: IProfile) => {
    console.log('[FUNC] - updateItem - ', id, value)
    onUpdate(id, value);
  }

  // load item detail
  const loadProfile = (id: string) => {
    console.log('[API] - call and load the profile detail - ', id);
    // profileService.getById(id).then((profile: any) => {
    //   const fields = ['name', '', 'lastName', 'email', 'role'];
    //   fields.forEach(field => formik.setFieldValue(field, profile[field], false));
    // });
  }

  // set
  const onSetImageLocationUrl = (files: any) => {
    let images = [];

    for (let i = 0; i < files.length; i++) {
      images.push(URL.createObjectURL(files[i]));
    }

    setImageLocationUrl(images);
  }

  // remove image url function
  const onRemove = () => {
    setImageUrl('');
    formik.setFieldValue('imageLogo', null);
  }

  // remove image location url function
  const onRemoveLocation = () => {
    setImageLocationUrl([]);
    formik.setFieldValue('imageLocation', null);
  }

  // on reset form
  const onRest = () => {
    formik.resetForm();
    onRemoveLocation();
    onRemove();
  }

  return (
    <Box p={theme.spacing(2)}>
      <Paper elevation={2}>
        <Box p={theme.spacing(3, 4)}>
          <form onSubmit={formik.handleSubmit} onReset={onRest}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  autoFocus
                  fullWidth
                  id="name"
                  name="name"
                  label="Store Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  autoFocus
                  fullWidth
                  id="contact"
                  name="contact"
                  label="Contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  error={formik.touched.contact && Boolean(formik.errors.contact)}
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  autoFocus
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  autoFocus
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  autoFocus
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
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
                      name={'paymenentOption'}
                      data={['All', 'AMEX', 'Cheque Gourmet', 'Discover', 'MasterCard', 'Visa', 'None']}
                      error={formik.touched.paymenentOption && Boolean(formik.errors.paymenentOption)}
                      errorMessage={formik.touched.paymenentOption && formik.errors.paymenentOption}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Payment Option'}
                      values={formik.values.paymenentOption}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'cuisines'}
                      data={['Chinese', 'Indian', 'International', 'Local', 'None']}
                      error={formik.touched.cuisines && Boolean(formik.errors.cuisines)}
                      errorMessage={formik.touched.cuisines && formik.errors.cuisines}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Cuisines'}
                      values={formik.values.cuisines}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'type'}
                      data={['Restaurant', 'Pub', 'Bar', 'None']}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      errorMessage={formik.touched.type && formik.errors.type}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Store Type'}
                      values={formik.values.type}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={3} md={2} lg={2}>
                <Paper variant='outlined'>
                  <Box p={2}>
                    <GroupCheckBox
                      name={'dressCode'}
                      data={['All', 'Casual Dress']}
                      error={formik.touched.dressCode && Boolean(formik.errors.dressCode)}
                      errorMessage={formik.touched.dressCode && formik.errors.dressCode}
                      handleChange={formik.handleChange}
                      required={true}
                      label={'Dress Code'}
                      values={formik.values.dressCode}
                    />
                  </Box>
                </Paper>
              </Grid>


              <Grid item xs={12} sm={6} md={4} lg={4}>
                {imageUrl &&
                  <Paper variant='outlined'>
                    <Box p={2}>
                      <FormLabel component="legend">Logo Preview</FormLabel>
                      <Box component={'img'} src={imageUrl} maxWidth={250} pt={1}>

                      </Box>
                    </Box>
                  </Paper>}
                <Box pt={1}>

                  {imageUrl ?
                    <Button variant='outlined' onClick={onRemove}>Remove</Button>
                    :
                    <Button
                      variant="contained"
                      component="label"
                    >
                      Upload Logo Image
                      <input
                        hidden
                        type='file'
                        name='imageLogo'
                        accept='image/*'
                        onChange={(e: any) => {
                          setImageUrl(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '');
                          formik.setFieldValue('imageLogo', e.target.files[0]);
                        }}
                      />
                    </Button>
                  }
                  <FormHelperText error={formik.touched.imageLogo && Boolean(formik.errors.imageLogo)}>{formik.touched.imageLogo && formik.errors.imageLogo}</FormHelperText>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormGroup row>
                  <FormControlLabel control={<Switch name={'isParking'} checked={formik.values.isParking} onChange={formik.handleChange} />} label="Parking" />
                  <FormHelperText error={formik.touched.isParking && Boolean(formik.errors.isParking)}>{formik.touched.isParking && formik.errors.isParking}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isByob'} checked={formik.values.isByob} onChange={formik.handleChange} />} label="BYOB" />
                  <FormHelperText error={formik.touched.isByob && Boolean(formik.errors.isByob)}>{formik.touched.isByob && formik.errors.isByob}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isAlcohol'} checked={formik.values.isAlcohol} onChange={formik.handleChange} />} label="Alcohol" />
                  <FormHelperText error={formik.touched.isAlcohol && Boolean(formik.errors.isAlcohol)}>{formik.touched.isAlcohol && formik.errors.isAlcohol}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isSmokingArea'} checked={formik.values.isSmokingArea} onChange={formik.handleChange} />} label="Smoking Area" />
                  <FormHelperText error={formik.touched.isSmokingArea && Boolean(formik.errors.isSmokingArea)}>{formik.touched.isSmokingArea && formik.errors.isSmokingArea}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isPublicHoliday'} checked={formik.values.isPublicHoliday} onChange={formik.handleChange} />} label="Open in Holiday" />
                  <FormHelperText error={formik.touched.isPublicHoliday && Boolean(formik.errors.isPublicHoliday)}>{formik.touched.isPublicHoliday && formik.errors.isPublicHoliday}</FormHelperText>

                  <FormControlLabel control={<Switch name={'isActive'} checked={formik.values.isActive} onChange={formik.handleChange} />} label="Active" />
                  <FormHelperText error={formik.touched.isActive && Boolean(formik.errors.isActive)}>{formik.touched.isActive && formik.errors.isActive}</FormHelperText>
                </FormGroup>
              </Grid>

              <Grid item xs={12} md={6} container display={'flex'} direction={'row'}>
                <Box>
                  <FormGroup>
                    <FormLabel component="legend" required>Open Time</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={formik.values.openTime}
                        onChange={
                          (value) => {
                            formik.setFieldValue('openTime', value)
                            console.log(value)
                          }
                        }
                      />
                    </LocalizationProvider>
                    {/* <FormHelperText error={formik.touched.openTime && Boolean(formik.errors.openTime)}>{formik.touched.openTime && formik.errors.openTime}</FormHelperText> */}
                  </FormGroup>
                </Box>
                <Box ml={2}>
                  <FormLabel component="legend" required>Close Time</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box>
                      <TimePicker
                        value={formik.values.closeTime}
                        onChange={(value) => {
                          formik.setFieldValue('closeTime', value)
                        }} />
                    </Box>
                  </LocalizationProvider>
                  {/* <FormHelperText error={formik.touched.closeTime && Boolean(formik.errors.closeTime)}>{formik.touched.closeTime && formik.errors.closeTime}</FormHelperText> */}
                </Box>
                <Box ml={2} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                  <Box mt={2} mr={1}>
                    <Checkbox
                      onChange={() => setIsBarClose(!isBarClose)}
                    />
                  </Box>
                  <Box>
                    <FormLabel component="legend">Bar Close Time</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box>
                        <TimePicker
                          disabled={isBarClose}
                          value={formik.values.barCloseTime}
                          onChange={(value) => {
                            formik.setFieldValue('barCloseTime', value)
                          }} />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} mt={3}>
                {imageLocationUrl.length > 0 &&
                  <Paper variant='outlined'>
                    <Box p={2}>
                      <FormLabel component="legend">Location Preview</FormLabel>
                      {imageLocationUrl.map((image, index) => (

                        <Box key={image} component={'img'} src={image} maxWidth={250} pt={1} />

                      ))}
                    </Box>
                  </Paper>}
                <Box pt={1}>

                  {imageLocationUrl.length > 0 ?
                    <Button variant='outlined' onClick={onRemoveLocation}>Remove</Button>
                    :
                    <Button
                      variant="contained"
                      component="label"
                    >
                      Upload Location Images
                      <input
                        hidden
                        type='file'
                        multiple
                        name='imageLocation'
                        accept='image/*'
                        onChange={(e: any) => {
                          onSetImageLocationUrl(e.target.files);
                          formik.setFieldValue('imageLocation', e.target.files);
                        }}
                      />
                    </Button>
                  }
                  <FormHelperText error={formik.touched.imageLocation && Boolean(formik.errors.imageLocation)}>{formik.touched.imageLocation && formik.errors.imageLocation}</FormHelperText>
                </Box>
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
                      {isAddMode ? 'Submit' : 'Update'}
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
                    {isAddMode ? 'Submit' : 'Update'}
                  </Button>
                </Grid>
              </Grid>}
          </form>
        </Box>
      </Paper>
    </Box>
  )
})

export default AddProfile;
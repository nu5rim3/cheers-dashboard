import React, { memo, useCallback } from 'react'
import { ImageUploaderProps } from '../interface';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button/Button';

// TODO: image uploader with drag n drop
// TODO: preview before upload
// TODO: remove signle
// TODO: upload and clear functions

const ImageUploader: React.FC<ImageUploaderProps> = memo(() => {

  const theme: any = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Box p={theme.spacing(2)}>
        <Paper elevation={2}>
          <Box p={theme.spacing(3, 4)}>
            <Grid container spacing={3} display={'flex'} justifyContent={'center'}>
              <Grid item xs={12} sm={6} md={6} lg={8} display={'flex'} justifyContent={'center'}>
                <Box width="100%" textAlign={'center'}>

                  <Paper {...getRootProps()} variant='outlined'>
                    <input {...getInputProps()} />
                    <Box p={theme.spacing(6, 0)}>
                      {
                        isDragActive ?
                          <p>Drop the files here ...</p> :
                          <p>Drag 'n' drop some files here, or click to select files</p>
                      }
                    </Box>
                  </Paper>

                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={8} display={'flex'} justifyContent={'center'}>
                <Box width="100%" textAlign={'center'}>

                  <Paper variant='outlined'>
                    <Box p={theme.spacing(2, 0)}>

                      preview images
                    </Box>

                  </Paper>
                </Box>
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
            </Grid>
          </Box>
        </Paper>
      </Box>

    </>
  )
})

export default ImageUploader;
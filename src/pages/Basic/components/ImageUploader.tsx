import React, { memo, useCallback, useEffect, useState } from 'react'
import { ImageUploaderProps } from '../interface';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import ImageList from '@mui/material/ImageList/ImageList';
import ImageListItem from '@mui/material/ImageListItem/ImageListItem';
import IconButton from '@mui/material/IconButton/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';


const ImageUploader: React.FC<ImageUploaderProps> = memo(() => {

  const theme: any = useTheme();
  const [files, setFiles] = useState<File[]>([]);
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFiles(preFiles => [...preFiles, ...acceptedFiles]);
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  const onDeleteImage = (lastModified: number) => {
    setFiles((prevState) => prevState.filter((file) => !(file.lastModified === lastModified)))
  }

  const onClearAll = () => {
    setFiles([]);
  }

  console.log(files);

  return (
    <>
      <Box p={theme.spacing(2)}>
        <Paper elevation={2}>
          <Box p={theme.spacing(3, 4)}>
            <Grid container spacing={3} display={'flex'} justifyContent={'center'}>
              <Grid item xs={12} sm={12} md={12} lg={10} display={'flex'} justifyContent={'center'}>
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
              {files.length > 0 &&
                <>
                  <Grid item xs={12} sm={12} md={12} lg={10} display={'flex'} justifyContent={'center'}>
                    <Box width="100%" textAlign={'center'}>

                      <Paper variant='outlined'>
                        <Box p={theme.spacing(2, 0)}>

                          Images perview

                          <Box display={'flex'} justifyContent={'center'}>

                            <ImageList sx={{ height: 450, paddingX: 5 }} cols={4} rowHeight={164}>
                              {files.map((item) => (
                                <Box key={item.lastModified} sx={{ height: 120 }}>
                                  <ImageListItem>
                                    <Box width={350} height={450} border={1}>
                                      <Box>
                                        <IconButton
                                          aria-label="delete"
                                          size="large"
                                          onClick={() => {
                                            onDeleteImage(item.lastModified)
                                          }}
                                        >
                                          <CancelIcon fontSize="inherit" />
                                        </IconButton>
                                      </Box>
                                      <Box display={'flex'} justifyContent={'center'}>
                                      <img
                                        style={{float: 'left',
                                          width:  '100%',
                                          height: 150,
                                          objectFit: 'cover' }}
                                        src={URL.createObjectURL(item)}
                                        srcSet={URL.createObjectURL(item)}
                                        alt={item.name}
                                        loading="lazy"
                                      />
                                      </Box>
                                    </Box>
                                  </ImageListItem>
                                </Box>

                              ))}
                            </ImageList>

                          </Box>

                        </Box>

                      </Paper>
                    </Box>
                  </Grid>

                  {mdMatch ?
                    <Grid container pt={3}>
                      <Grid item md={8} lg={10} />
                      <Grid container item spacing={1} md={4} lg={2} display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
                        <Grid item md={6} lg={6}>
                          <Button
                            color="primary"
                            variant="outlined"
                            fullWidth
                            onClick={onClearAll}
                          >
                            Clear
                          </Button>
                        </Grid>
                        <Grid item md={6} lg={6}>
                          <LoadingButton
                            color="primary"
                            variant="contained"
                            fullWidth
                            type="submit"
                            loading
                          >
                            Submit
                          </LoadingButton>
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
                          onClick={onClearAll}
                        >
                          Clear
                        </Button>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <LoadingButton
                          color="primary"
                          variant="contained"
                          fullWidth
                          type="submit"
                          loading
                        >
                          Submit
                        </LoadingButton>
                      </Grid>
                    </Grid>}
                </>

              }



            </Grid>
          </Box>
        </Paper>
      </Box>

    </>
  )
})

export default ImageUploader;
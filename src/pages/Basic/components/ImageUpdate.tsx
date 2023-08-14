
import React, { memo, useCallback, useState } from 'react'
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
import ImageListItemBar from '@mui/material/ImageListItemBar/ImageListItemBar';
import { Typography } from '@mui/material';

const imageFiles = [
  {
    id: '1',
    index: 1,
    name: 'image1',
    imageUrl: 'http://via.placeholder.com/500x700'
  },
  {
    id: '2',
    index: 2,
    name: 'image2',
    imageUrl: 'http://via.placeholder.com/500x700'
  },
  {
    id: '3',
    index: 3,
    name: 'image3',
    imageUrl: 'http://via.placeholder.com/500x700'
  },
  {
    id: '4',
    index: 4,
    name: 'image4',
    imageUrl: 'http://via.placeholder.com/500x700'
  },
];


const ImageUpdate: React.FC<ImageUploaderProps> = memo(() => {

  const theme: any = useTheme();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedImageList, setUploadedImageList] = useState<any[]>(imageFiles)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSortSelected, setIsSortSelected] = useState<boolean>(false);
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

  // API CALLS
  const onDeleteUploaded = (id: string) => {
    console.log('[API] - delete image')
  }


  const onUpdateOrder = () => {
    console.log('[API] - update order - ', uploadedImageList)
    setIsSortSelected(false);
  }

  // END API CALLS

  const onHandleDragStart = (index: number) => {
    console.log('selected - ', index)
    setSelectedIndex(index);
    setIsSortSelected(true);
  }

  const onHadleDragLeaveCapture = (index: number) => {
    const newArr = moveItem(uploadedImageList, selectedIndex, index);
    setUploadedImageList(newArr);
  }

  const moveItem = (
    arr: any[],
    from: number,
    to: number
  ): any[] => {
    const copiedArray = [...arr];
    const [removedItem] = copiedArray.splice(from, 1);
    copiedArray.splice(to, 0, removedItem);
    return copiedArray;
  };

  return (
    <>
      <Box p={theme.spacing(2)}>
        <Paper elevation={2}>
          <Box p={theme.spacing(3, 4)}>
            <Grid container spacing={3} display={'flex'} justifyContent={'center'}>
              <Grid item xs={12} sm={12} md={12} lg={10} display={'flex'} justifyContent={'center'}>
                <Box width="100%" textAlign={'center'}>

                  <Paper variant='outlined'>
                    <Box p={theme.spacing(2, 0)}>
                      <Typography variant='body1'>
                        Uploaded images
                      </Typography>

                      <Box>

                        <ImageList sx={{ height: 450, paddingX: 5 }} cols={6} rowHeight={150}>
                          {uploadedImageList.map((item, index) => (
                            <Box
                              key={item.id}
                              component={'div'}
                              draggable
                              onDragStartCapture={() => onHandleDragStart(index)}
                              // onDragOverCapture={
                              //   () => console.log(index)
                              // }
                              onDragLeaveCapture={
                                () => onHadleDragLeaveCapture(index)
                              }
                            >
                              <ImageListItem>
                                <ImageListItemBar
                                  title={item.name}
                                  position="below"
                                  actionIcon={
                                    <IconButton
                                      aria-label={`info about ${item.name}`}
                                      onClick={() => {
                                        onDeleteUploaded(item.id)
                                      }}
                                    >
                                      <CancelIcon fontSize="inherit" />
                                    </IconButton>
                                  }
                                />
                                <img
                                  style={{
                                    float: 'left',
                                    width: '100%',
                                    objectFit: 'cover'
                                  }}
                                  src={item.imageUrl}
                                  srcSet={item.imageUrl}
                                  alt={item.name}
                                  loading="lazy"
                                />
                              </ImageListItem>
                            </Box>

                          ))}
                        </ImageList>

                      </Box>

                      {isSortSelected ?
                        <LoadingButton
                          color="primary"
                          variant="contained"
                          // fullWidth
                          // type="submit"
                          // loading
                          onClick={onUpdateOrder}
                        >
                          Update menu pages order
                        </LoadingButton>
                        :
                        <Typography variant='caption'>
                          Drag from the title to arrange the order of the menu
                        </Typography>
                      }
                    </Box>

                  </Paper>
                </Box>
              </Grid>
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
                                          style={{
                                            float: 'left',
                                            width: '100%',
                                            height: 150,
                                            objectFit: 'cover'
                                          }}
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
                          // loading
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
                        // loading
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

export default ImageUpdate;
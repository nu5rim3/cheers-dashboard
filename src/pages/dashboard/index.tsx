import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import React from 'react';

const dashboard = () => {

  return (
    <>
        <Box pt={1} pb={1}>
          <ul>
            <li>News</li>
            <li>payments</li>
            <li>profile rank</li>
          </ul>
          <Typography variant='h1'>
            hello
          </Typography>
          <Typography variant='body1'>body1</Typography>
          <Typography variant='body2'>body2</Typography>
          <Button color='primary' variant='contained'>hello</Button>
          <Button color='secondary' variant='contained'>hello</Button>
          <Button color='primary' variant='outlined'>hello</Button>
          <Button color='secondary' variant='outlined'>Hello</Button>
          <Button color='primary' variant='text'>hello</Button>
          <Button color='secondary' variant='text'>Hello</Button>
        </Box>
    </>
  )
}

export default dashboard;
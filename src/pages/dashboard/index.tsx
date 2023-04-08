import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Paper from '@mui/material/Paper/Paper';
import React from 'react';

const dashboard = () => {
  console.log('hello')
  return (
    <>
      <Paper>
        <Box pt={1} pb={1}>
          <ul>
            <li>News</li>
            <li>payments</li>
            <li>profile rank</li>
          </ul>
          <Button color='primary' variant='contained'>hello</Button>
          <Button color='secondary' variant='contained'>hello</Button>
          <Button color='primary' variant='outlined'>hello</Button>
          <Button color='secondary' variant='outlined'>Hello</Button>
          <Button color='primary' variant='text'>hello</Button>
          <Button color='secondary' variant='text'>Hello</Button>
        </Box>
      </Paper>
    </>
  )
}

export default dashboard;
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import React from 'react'
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Header from '../../components/Header';

const Foods = () => {
    return (
        <>
            <Paper>
                <Box p={8}>
                   <Header title={'Foods List'} />
                    <ul>
                        <li>CRUD foods table with active status check</li>
                        <li>perview item</li>
                    </ul>
                </Box>
            </Paper>
        </>
    )
}

export default Foods;
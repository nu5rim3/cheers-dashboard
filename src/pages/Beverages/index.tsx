import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'
import Header from '../../components/Header';

const Beverages = () => {
    return (
        <>
            <Paper>
                <Box p={8}>
                    <Header title={'Beverages List'} />
                    <ul>
                        <li>CRUD Beverages</li>
                        <li>perview item</li>
                    </ul>
                </Box>
            </Paper>
        </>
    )
}

export default Beverages;
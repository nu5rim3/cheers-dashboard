import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import React from 'react'
import Header from '../../components/Header';

const Customers = () => {
    return (
        <>
            <Paper>
                <Box p={8}>
                    <Header title={'Customers List'} />
                    <ul>
                        <li>CRUD Customers</li>
                        <li>perview item</li>
                        <li>availablity</li>
                    </ul>
                </Box>
            </Paper>
        </>
    )
}

export default Customers;
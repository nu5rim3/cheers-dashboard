import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import React from 'react'
import Header from '../../components/Header';

const Tables = () => {
    return (
        <>
            <Paper>
                <Box p={8}>
                    <Header title={'Tables List'} />
                    <ul>
                        <li>CRUD Tables</li>
                        <li>perview item</li>
                        <li>availablity</li>
                    </ul>
                </Box>
            </Paper>
        </>
    )
}

export default Tables;
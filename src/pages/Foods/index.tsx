import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import React from 'react'

const Foods = () => {
    return (
        <>
            <Paper>
                <Box pt={1} pb={1}>
                    <ul>
                        <li>CRUD foods</li>
                        <li>perview item</li>
                        <li>availablity</li>
                    </ul>
                </Box>
            </Paper>
        </>
    )
}

export default Foods;
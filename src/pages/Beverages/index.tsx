import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from 'react'
import Header from '../../components/Header';

const Beverages = () => {

    const [open, setOpen] = useState<boolean>(false);

    const onClickAdd = () => {
        setOpen(!open);
    }


    return (
        <>
            <Box>
                <Header title={'Beverages List'} onClick={onClickAdd}/>
                <ul>
                    <li>CRUD Beverages</li>
                    <li>perview item</li>
                </ul>
            </Box>
        </>
    )
}

export default Beverages;
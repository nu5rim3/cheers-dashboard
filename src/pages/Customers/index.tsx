import Box from '@mui/material/Box/Box';
import React from 'react'
import Header from '../../components/Header';
import { useState } from 'react';

const Customers = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onClickAdd = () => {
        setOpen(!open);
    }
    return (
        <>
            <Box p={8}>
                <Header title={'Customers List'} onClick={onClickAdd} />
                <ul>
                    <li>CRUD Customers</li>
                    <li>perview item</li>
                    <li>availablity</li>
                </ul>
            </Box>
        </>
    )
}

export default Customers;
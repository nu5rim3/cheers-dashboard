import Box from '@mui/material/Box/Box';
import React, { useState } from 'react'
import Header from '../../components/Header';

const Tables = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onClickAdd = () => {
        setOpen(!open);
    }
    return (
        <>
            <Box p={8}>
                <Header title={'Tables List'} onClick={onClickAdd} />
                <ul>
                    <li>CRUD Tables</li>
                    <li>perview item</li>
                    <li>availablity</li>
                </ul>
            </Box>
        </>
    )
}

export default Tables;
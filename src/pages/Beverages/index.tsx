import Box from '@mui/material/Box/Box';
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
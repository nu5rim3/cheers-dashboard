import Box from '@mui/material/Box/Box';
import React, { useState } from 'react'
import Header from '../../components/Header';

const Beverages = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onClickAdd = () => {
        setOpen(!open);
        setIsEdit(false);
    }

    const onClickEdit = () => {
        setOpen(!open);
        setIsEdit(true);
    }

    const onSubmit = () => {
        console.log('[FUNC] - onSubmit')
        setOpen(!open);
        setIsEdit(false);

    }

    return (
        <>
            <Box>
                <Header title={'Beverages List'} onAddClick={onClickAdd} onEditClick={onClickAdd} />
                <ul>
                    <li>CRUD Beverages</li>
                    <li>perview item</li>
                </ul>
            </Box>
        </>
    )
}

export default Beverages;
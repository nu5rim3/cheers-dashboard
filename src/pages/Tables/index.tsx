import Box from '@mui/material/Box/Box';
import React, { useState } from 'react'
import Header from '../../components/Header';

const Tables = () => {
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
            <Box p={8}>
                <Header title={'Tables List'} onAddClick={onClickAdd} onEditClick={onClickEdit} />
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
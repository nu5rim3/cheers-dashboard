import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import React, { useState } from 'react';
import Header from '../../components/Header';
import FullModal from '../../components/FullModal';
import ItemAddForm from './components/forms/ItemAddForm';
import ItemEditForm from './components/forms/ItemEditForm';
import TableView from './components/TableView';

const Foods = () => {

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
            {/* <ul>
                        <li>CRUD foods table with active status check</li>
                        <li>perview item</li>
                    </ul> */}

            <Box>
                <Grid>
                    <Grid item xs={12}>
                        <Header title={'Foods List'} onClick={onClickAdd} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TableView />
                    </Grid>
                </Grid>
            </Box>



            <Button onClick={onClickEdit}>Edit mode</Button>

            <FullModal
                open={open}
                isEdit={isEdit}
                toggleModal={onClickAdd}
                onSubmit={onSubmit}
            >
                {isEdit ? <ItemEditForm /> : <ItemAddForm onSubmit={onSubmit} />}
            </FullModal>
        </>
    )
}

export default Foods;
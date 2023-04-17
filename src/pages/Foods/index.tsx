import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Header from '../../components/Header';
import FullModal from '../../components/FullModal';
import ItemAdd from './components/ItemAdd';
import ItemEdit from './components/ItemEdit';
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

    return (
        <>
            {/* <ul>
                        <li>CRUD foods table with active status check</li>
                        <li>perview item</li>
                    </ul> */}

            <Box>
                <Grid spacing={3}>
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
            >
                {isEdit ? <ItemEdit /> : <ItemAdd />}
            </FullModal>
        </>
    )
}

export default Foods;
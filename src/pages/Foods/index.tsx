import React, { lazy, useState } from 'react';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Header from '../../components/Header';
import FullModal from '../../components/FullModal';
import ItemEditForm from './components/forms/ItemEditForm';
import TableView from './components/TableView';
import useFoodServices from '../../firebase/services/food.services';

const ItemAddForm = lazy(() => import('./components/forms/ItemAddForm'));

const Foods = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { save, updateById } = useFoodServices();

    const onClickAdd = () => {
        setOpen(!open);
        setIsEdit(false);
    }

    const onClickEdit = () => {
        setOpen(!open);
        setIsEdit(true);
    }

    const onCreate = (data: IFood) => {
        save(data)
        setOpen(!open);
        setIsEdit(false);
    }

    const onUpdate = (id: string, data: IFood) => {
        updateById(id, data)
    }

    return (
        <>
            <Box>
                <Grid>
                    <Grid item xs={12}>
                        <Header title={'Foods List'} onAddClick={onClickAdd} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TableView />
                    </Grid>
                </Grid>
            </Box>


            <FullModal
                open={open}
                title={isEdit ? 'Edit Food' : 'Add New Food'}
                toggleModal={onClickAdd}
            >
                {isEdit ? <ItemEditForm /> :

                    <ItemAddForm onCreate={onCreate} onUpdate={onUpdate} />

                }
            </FullModal>
        </>
    )
}

export default Foods;

import React, { useState } from 'react';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Header from '../../components/Header';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ImagePreviewer from './components/ImagePreviewer';
import FullModal from '../../components/FullModal';
import ImageUploader from './components/ImageUploader';
import ImageUpdate from './components/ImageUpdate';
import { Button } from '@mui/material';

// TODO: create multiple image uploading 
// TODO: create image preview screen add function remove update signle images 

const Basic: React.FC = () => {

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
                <Grid>
                    <Grid item xs={12}>
                        <Header title={'Menu List'} onAddClick={onClickAdd} onEditClick={onClickEdit} primaryActionTitle='Add Menu' secondayActionTitle='Edit Menu' />
                    </Grid>
                </Grid>

                <Box mb={2}>
                    <Button variant="contained" startIcon={<QrCodeIcon />}>
                        Generate QR and Download
                    </Button>
                </Box>

                <ImagePreviewer />

                <FullModal
                    open={open}
                    title={isEdit ? 'Edit Menu' : 'Add Menu'}
                    toggleModal={onClickAdd}
                    onSubmit={onSubmit}
                >
                    {isEdit ? <ImageUpdate onSubmit={onSubmit} /> :

                        <ImageUploader onSubmit={onSubmit} />

                    }
                </FullModal>
            </Box>
        </>
    )
}

export default Basic;
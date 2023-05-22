import { Grid } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { lazy, useState } from 'react'
import Header from '../../components/Header';
import FullModal from '../../components/FullModal';
import Loadable from '../../components/Loadable';

const AddProfile = Loadable(lazy(() => import('./components/forms/AddProfile')));
// const EditProfile = Loadable(lazy(() => import('./components/forms/EditProfile')));
const PreviewProfile = Loadable(lazy(() => import('./components/PreviewProfile')));

const Profile = () => {

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
                        <Header title={'Store Profile'} onAddClick={onClickAdd} onEditClick={onClickEdit} primaryActionTitle={'Add Profile'} secondayActionTitle={'Edit Profile'} />
                    </Grid>
                </Grid>

                <PreviewProfile />

                <FullModal
                    open={open}
                    title={isEdit ? 'Edit Store Profile' : 'Create Store Profile'}
                    toggleModal={onClickAdd}
                    onSubmit={onSubmit}
                >
                    <AddProfile onSubmit={onSubmit} id={isEdit ? '1' : ''} /> 

                </FullModal>

            </Box>
        </>
    )
}

export default Profile;
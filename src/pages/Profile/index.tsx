import { Grid } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { lazy, useState } from 'react'
import Header from '../../components/Header';
import FullModal from '../../components/FullModal';
import Loadable from '../../components/Loadable';
import { ILoggedInUser } from '../../store/reducers/userDetails/user';
import { userSelector } from '../../store/reducers/userDetails/user.selector';
import useProfileServices from '../../firebase/services/profile.services';
import { IProfile } from './interface';


const AddProfile = Loadable(lazy(() => import('./components/forms/AddProfile')));
// const EditProfile = Loadable(lazy(() => import('./components/forms/EditProfile')));
const PreviewProfile = Loadable(lazy(() => import('./components/PreviewProfile')));

const Profile = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const user: ILoggedInUser = userSelector();
    const { save } = useProfileServices();

    const onClickAdd = () => {
        setOpen(!open);
        setIsEdit(false);
    }

    const onClickEdit = () => {
        setOpen(!open);
        setIsEdit(true);
    }

    const onCreate = (data: IProfile) => {
        console.log('[onCreate] - ', data);
        save(data);
        setOpen(!open);
        setIsEdit(false);
    }

    const onUpdate = (id: string, data: any) => {
        console.log('[onUpdate] - ', { id, data });
        setOpen(!open);
        setIsEdit(false);
    }

    return (
        <>
            <Box>
                <Grid>
                    <Grid item xs={12}>
                        <Header title={'Store Profile'} onAddClick={onClickAdd} primaryActionTitle={'Add Profile'} />
                    </Grid>
                </Grid>

                <PreviewProfile />

                <FullModal
                    open={open}
                    title={isEdit ? 'Edit Store Profile' : 'Create Store Profile'}
                    toggleModal={onClickAdd}

                >
                    <AddProfile onCreate={onCreate} onUpdate={onUpdate} id={isEdit ? user.uid : ''} />

                </FullModal>

            </Box>
        </>
    )
}

export default Profile;
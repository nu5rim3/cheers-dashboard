import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Header from '../../components/Header';
import QrCodeIcon from '@mui/icons-material/QrCode';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ImagePreviewer from './components/ImagePreviewer';
import FullModal from '../../components/FullModal';
import ImageUploader from './components/ImageUploader';
import ImageUpdate from './components/ImageUpdate';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { userSelector } from '../../store/reducers/userDetails/user.selector';
import { useSelector } from 'react-redux';
import { ILoggedInUser } from '../../store/reducers/userDetails/user';


const Basic: React.FC = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [QRurl, setQRurl] = useState<string>('');
    const [QR, setQR] = useState<any>();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const user: ILoggedInUser = userSelector();

    useEffect(() => {
        const baseUrl = window.location.href;
        const fullUrl = baseUrl + 'preview/' + user.uid
        setQRurl(fullUrl)
    }, [user])

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

    const onClickPerview = () => {
        navigate('/preview/' + user?.uid)
    }


    const onGenerateAndDownloadQR = () => {
        QRCode.toDataURL(QRurl, { width: 300 }, (error, url) => {
            setQR(url)
        })
    }



    return (
        <>
            <Box>
                <Grid>
                    <Grid item xs={12}>
                        <Header title={'Menu List'} onAddClick={onClickAdd} onEditClick={onClickEdit} primaryActionTitle='Add Menu' secondayActionTitle='Edit Menu' />
                    </Grid>
                </Grid>

                <Box mb={2} display={'flex'} flexDirection={'row'}>
                    <Box mr={1}>
                        <Button variant="contained" startIcon={<RemoveRedEyeIcon />} onClick={onClickPerview}>
                            User Preview
                        </Button>
                    </Box>
                    <Box>
                        {QR ?
                            <Button variant="contained" startIcon={<QrCodeIcon />} href={QR} download>
                                Download QR
                            </Button>
                            :
                            <Button variant="outlined" startIcon={<QrCodeIcon />} onClick={onGenerateAndDownloadQR}>
                                Generate QR
                            </Button>
                        }
                    </Box>
                </Box>

                <ImagePreviewer id={user.uid} />

                <FullModal
                    open={open}
                    title={isEdit ? 'Edit Menu' : 'Add Menu'}
                    toggleModal={onClickAdd}
                >
                    {isEdit ?
                        <ImageUpdate onSubmit={onSubmit} />
                        :
                        <ImageUploader onSubmit={onSubmit} />
                    }
                </FullModal>
            </Box>
        </>
    )
}

export default Basic;
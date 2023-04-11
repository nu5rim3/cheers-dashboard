import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

interface HeaderProps {
    title: string,
    // onAddNew: () => void,
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant={'h5'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        color='primary'
                        variant='contained'
                        startIcon={<AddCircleIcon />}
                    >
                        Add New
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Header
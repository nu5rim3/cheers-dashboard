import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { memo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

interface HeaderProps {
    title: string,
    onClick: () => void,
}

const Header: React.FC<HeaderProps> = memo(({ title, onClick }) => {

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const xl = useMediaQuery(theme.breakpoints.up("xl"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant={'h5'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} display={'flex'} justifyContent={sm ? 'flex-end' : 'flex-start'}>
                    <Button
                        color='primary'
                        variant='contained'
                        startIcon={<AddCircleIcon />}
                        onClick={onClick}
                    >
                        Add New
                    </Button>
                </Grid>
            </Grid>
            {/* <span>{`theme.breakpoints.up('xs') matches: ${xs}`}</span>
            <br />
            <span>{`theme.breakpoints.up('lg') matches: ${lg}`}</span>
            <br />
            <span>{`theme.breakpoints.up('md') matches: ${md}`}</span>
            <br />
            <span>{`theme.breakpoints.up('xl') matches: ${xl}`}</span>
            <br />
            <span>{`theme.breakpoints.up('sm') matches: ${sm}`}</span> */}
        </>
    )
});

export default Header
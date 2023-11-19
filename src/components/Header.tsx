import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import React, { memo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box/Box';

interface HeaderProps {
    title: string,
    primaryActionTitle?: string,
    secondayActionTitle?: string,
    onAddClick?: () => void,
    onEditClick?: () => void,
}

const Header: React.FC<HeaderProps> = memo(({ title, primaryActionTitle, secondayActionTitle, onAddClick, onEditClick }) => {

    const theme = useTheme();
    // const xs = useMediaQuery(theme.breakpoints.up("xs"));
    // const lg = useMediaQuery(theme.breakpoints.up("lg"));
    // const md = useMediaQuery(theme.breakpoints.up("md"));
    // const xl = useMediaQuery(theme.breakpoints.up("xl"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <>
            <Grid container mb={4}>
                <Grid item xs={12} sm={6}>
                    <Typography variant={'h5'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} display={'flex'} justifyContent={sm ? 'flex-end' : 'flex-start'}>
                    {onEditClick &&
                        <Box mr={1}>
                            <Button
                                color='primary'
                                variant='outlined'
                                startIcon={<ModeEditOutlineIcon />}
                                onClick={onEditClick}
                            >
                                {secondayActionTitle}
                            </Button>
                        </Box>
                    }
                    <Box>
                        <Button
                            color='primary'
                            variant='contained'
                            startIcon={<AddCircleIcon />}
                            onClick={onAddClick}
                        >
                            {primaryActionTitle}
                        </Button>
                    </Box>
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

Header.defaultProps = {
    primaryActionTitle: 'Add Item',
    secondayActionTitle: 'Edit Item'
}

export default Header
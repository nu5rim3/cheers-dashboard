import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper'
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import React, { Children } from 'react'

interface MainCardProps {
    children: React.ReactNode
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <>
            <Paper elevation={2}>
                <Box p={sm ? 3 : 2}>
                    {children}
                </Box>
            </Paper >
        </>
    )
}

export default MainCard
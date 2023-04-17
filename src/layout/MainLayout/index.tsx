import React from 'react'
import MiniDrawer from './Drawer'
import { Outlet } from 'react-router-dom'
import MainCard from '../../components/MainCard'

const MainLayout = () => {
    return (
        <>
            <MiniDrawer>
                <MainCard>
                    <Outlet />
                </MainCard>
            </MiniDrawer>
        </>
    )
}

export default MainLayout
import React from 'react'
import MiniDrawer from './Drawer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <MiniDrawer>
                <Outlet />
            </MiniDrawer>
        </>
    )
}

export default MainLayout
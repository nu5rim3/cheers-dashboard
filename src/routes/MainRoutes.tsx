import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';


// render - pages
const Dashboard = Loadable(lazy(() => import('../pages/dashboard')));
const Foods = Loadable(lazy(() => import('../pages/Foods')));
const Beverages = Loadable(lazy(() => import('../pages/Beverages')));
const Tables = Loadable(lazy(() => import('../pages/Tables')));
const Profile = Loadable(lazy(() => import('../pages/Profile')));
const Payments = Loadable(lazy(() => import('../pages/Payments')));
const Reviews = Loadable(lazy(() => import('../pages/Reviews')));
const Customers = Loadable(lazy(() => import('../pages/Customers')));
const Support = Loadable(lazy(() => import('../pages/Support')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'foods',
            element: <Foods />
        },
        {
            path: 'beverages',
            element: <Beverages />
        },
        {
            path: 'tables',
            element: <Tables />
        },
        {
            path: 'customers',
            element: <Customers />
        },
        {
            path: 'payments',
            element: <Payments />
        },
        {
            path: 'support',
            element: <Support />
        },
        {
            path: 'reviews',
            element: <Reviews />
        },
        {
            path: 'profile',
            element: <Profile />
        },
        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
    ]
};

export default MainRoutes;

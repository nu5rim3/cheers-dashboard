import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/dashboard';
import Foods from '../pages/Foods';
import Beverages from '../pages/Beverages';
import Tables from '../pages/Tables';
import Profile from '../pages/Profile';
import Payments from '../pages/Payments';
import Reviews from '../pages/Review';
import Customers from '../pages/Customers';
import Support from '../pages/Support';

// render - dashboard
// const Dashboard = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

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
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // },
        // {
        //     path: 'shadow',
        //     element: <Shadow />
        // },
        // {
        //     path: 'typography',
        //     element: <Typography />
        // },
        // {
        //     path: 'icons/ant',
        //     element: <AntIcons />
        // }
    ]
};

export default MainRoutes;

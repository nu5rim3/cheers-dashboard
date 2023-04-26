import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import ErrorBoundary from '../components/ErrorBoundary';


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
            element: (
                <ErrorBoundary>
                    <Dashboard />
                </ErrorBoundary>
            )
        },
        {
            path: 'foods',
            element: (
                <ErrorBoundary>
                    <Foods />
                </ErrorBoundary>
            )
        },
        {
            path: 'beverages',
            element: (
                <ErrorBoundary>
                    <Beverages />
                </ErrorBoundary>
            )
        },
        {
            path: 'tables',
            element: (
                <ErrorBoundary>
                    <Tables />
                </ErrorBoundary>
            )
        },
        {
            path: 'customers',
            element: (
                <ErrorBoundary>
                    <Customers />
                </ErrorBoundary>
            )
        },
        {
            path: 'payments',
            element: (
                <ErrorBoundary>
                    <Payments />
                </ErrorBoundary>
            )
        },
        {
            path: 'support',
            element: (
                <ErrorBoundary>
                    <Support />
                </ErrorBoundary>
            )
        },
        {
            path: 'reviews',
            element: (
                <ErrorBoundary>
                    <Reviews />
                </ErrorBoundary>
            )
        },
        {
            path: 'profile',
            element: (
                <ErrorBoundary>
                    <Profile />
                </ErrorBoundary>
            )
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

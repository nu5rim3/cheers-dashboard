import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';

// render - login
const AuthCard = Loadable(lazy(() => import('../pages/authentication/AuthCard')));
const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthCard />
        },
        {
            path: 'register',
            element: <AuthRegister />
        }
    ]
};

export default LoginRoutes;

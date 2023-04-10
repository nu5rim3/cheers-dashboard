import DashboardIcon from '@mui/icons-material/Dashboard';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LiquorIcon from '@mui/icons-material/Liquor';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

interface IRoutePath {
    label: string,
    path: string,
    icon: React.ReactNode,
    active: boolean,
    level: number

}
const routePath: IRoutePath[] = [
    {
        label: 'DashBoard',
        path: '/',
        icon: <DashboardIcon />,
        active: true,
        level: 0
    },
    {
        label: 'Foods',
        path: '/foods',
        icon: <DinnerDiningIcon />,
        active: false,
        level: 0
    },
    {
        label: 'Beverages',
        path: '/beverages',
        icon: <LiquorIcon />,
        active: false,
        level: 0
    },
    {
        label: 'Tables',
        path: '/tables',
        icon: <TableRestaurantIcon />,
        active: false,
        level: 0
    },
    {
        label: 'Profile',
        path: '/profile',
        icon: <ManageAccountsIcon />,
        active: false,
        level: 1
    },
    {
        label: 'Payments',
        path: '/payments',
        icon: <PaymentsIcon />,
        active: false,
        level: 1
    },
    {
        label: 'Contact',
        path: '/contact',
        icon: <ConnectWithoutContactIcon />,
        active: false,
        level: 1
    }
]

export default routePath;
import DashboardIcon from '@mui/icons-material/Dashboard';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LiquorIcon from '@mui/icons-material/Liquor';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StoreIcon from '@mui/icons-material/Store';

interface IRoutePath {
    label: string,
    path: string,
    icon: React.ReactNode,
    active: boolean,
    level: number

}
const routePath: IRoutePath[] = [
    // {
    //     label: 'DashBoard',
    //     path: '/',
    //     icon: <DashboardIcon />,
    //     active: true,
    //     level: 0
    // },
    {
        label: 'Basic',
        path: '/basic',
        icon: <AddPhotoAlternateIcon />,
        active: true,
        level: 0
    },
    {
        label: 'Store Profile',
        path: '/profile',
        icon: <StoreIcon />,
        active: true,
        level: 0
    },
    {
        label: 'Foods',
        path: '/foods',
        icon: <DinnerDiningIcon />,
        active: true,
        level: 0
    },
    // {
    //     label: 'Beverages',
    //     path: '/beverages',
    //     icon: <LiquorIcon />,
    //     active: false,
    //     level: 0
    // },
    // {
    //     label: 'Tables',
    //     path: '/tables',
    //     icon: <TableRestaurantIcon />,
    //     active: false,
    //     level: 0
    // },
    // {
    //     label: 'Customers',
    //     path: '/customers',
    //     icon: <PeopleAltIcon />,
    //     active: false,
    //     level: 1
    // },
    // {
    //     label: 'Reviews',
    //     path: '/reviews',
    //     icon: <ReviewsIcon />,
    //     active: false,
    //     level: 1
    // },
    // {
    //     label: 'Payments',
    //     path: '/payments',
    //     icon: <PaymentsIcon />,
    //     active: false,
    //     level: 1
    // },
    // {
    //     label: 'Support',
    //     path: '/support',
    //     icon: <SupportAgentIcon />,
    //     active: false,
    //     level: 1
    // }
]

export default routePath;
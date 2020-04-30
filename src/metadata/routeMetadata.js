import { BEERS_PATH, PUBLIC_PATH } from '../constants/pathConstants';
import BeersLayout from '../components/Layout/secured/BeersLayout';
import Welcome from '../components/Layout/public/Welcome';

const ROUTES = [
    {
        path: BEERS_PATH,
        component: BeersLayout,
        protected: true,
        exact: true
    },
    {
        path: PUBLIC_PATH,
        component: Welcome,
        protected: false,
        exact: true
    }
];

export default ROUTES;
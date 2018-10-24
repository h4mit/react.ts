import { IRoute } from '.';
import { HomePage } from 'src/pages/Home/HomePage';
import { AboutPage } from 'src/pages/About/AboutPage';

const MasterRoutes: IRoute[] = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    }
];

export default MasterRoutes;
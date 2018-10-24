import MasterLayout from "src/layout/master.layout";

export interface IRoute {
    path: string;
    component: any;
    redirect?: boolean;
    to?: any;
};

const indexRoutes: IRoute[] = [
    {
        path: "/",
        component: MasterLayout
    }
];

export default indexRoutes;
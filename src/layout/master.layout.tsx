import * as React from "react";
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import MasterRoutes from 'src/routes/master';
import { IRoute } from 'src/routes';

const switchRoutes = (
    <Switch>
      {MasterRoutes.map((route: IRoute, key) => {
        if (route.redirect)
          return <Redirect from={route.path} to={route.to} key={key} />;
        return <Route path={route.path} exact={true} component={route.component} key={key} />;
      })}
    </Switch>
  );
  

export default class MasterLayout extends React.Component<any, any> {

    public render() {
        return <div>
            <h1>Master Layout!!</h1>
            {switchRoutes}
            <hr/>
            <Link to="/">Home</Link> <Link to="/about">About</Link>

            </div>;
    }
}
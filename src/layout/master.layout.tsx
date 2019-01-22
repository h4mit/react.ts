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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Master Layout!!</h1>
      {switchRoutes}
      <hr />
      <Link to="/">Home</Link> <Link to="/about">About</Link>

    </div>;
  }
}
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import './core/http/interceptors';
import {AppConfig} from './core/config/AppConfig';
import Loading  from './utils/loadings/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./App'),
    loading: Loading
});

AppConfig.init();

ReactDOM.render(
    <LoadableComponent />,
    document.getElementById("aro-app")
);
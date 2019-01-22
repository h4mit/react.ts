import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import './core/http/interceptors';
import {AppConfig} from './core/config/AppConfig';
import Loading  from './utils/loadings/Loading';
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const LoadableComponent = Loadable({
    loader: () => import('./App'),
    loading: Loading
});

AppConfig.init();

ReactDOM.render(
    <LoadableComponent />,
    document.getElementById("aro-app")
);
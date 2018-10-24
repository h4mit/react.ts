import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import './core/http/interceptors';

ReactDOM.render(
    <App init="H4mit"  />,
    document.getElementById("aro-app")
);
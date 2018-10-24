import * as React from "react";
import * as intl from 'react-intl-universal';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as $ from 'jquery';
import * as config from 'react-global-configuration';
import indexRoutes, { IRoute } from './routes';


export default class App extends React.Component<any, any> {

    state = {
        init: false
    };

    public componentDidMount() {
        this.getLocale();
        $('title').text(config.get('APP_NAME'));
    }

    private getLocale(): void {
        let currentLang: string = 'en';
        axios.get(`./i18n/${currentLang}.json`).then(
            (res: any) => {
                intl.init({
                    currentLocale: currentLang,
                    locales: {
                        [currentLang]: res.data
                    }
                });
            }
        ).then(() => this.setState({
            init: true
        }));
    }

    public render() {
        return (this.state.init &&
            <div>
                <HashRouter>
                    <Switch>
                        {indexRoutes.map((route: IRoute, key) => {
                            if (route.redirect)
                                return <Redirect from={route.path}  to={route.to} key={key} />;
                            return <Route path={route.path} component={route.component} key={key} />;
                        })}
                    </Switch>
                </HashRouter>
            </div>);
    }
}
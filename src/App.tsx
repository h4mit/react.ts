import * as React from "react";
import * as intl from 'react-intl-universal';
import axios from 'axios';
import {Hello} from "./components/Hello";
import * as $ from 'jquery';
import * as config from 'react-global-configuration';


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
        ).then( () => this.setState( {
            init: true
        }));
    }

    public render() {
        return (this.state.init && <Hello compiler="TypeScript" framework="React"/>);
    }
}
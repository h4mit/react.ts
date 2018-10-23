import * as React from "react";
import * as intl from 'react-intl-universal';
import axios from 'axios';
import {Hello} from "./components/Hello";


export interface IAppProps {
    init: string;
}

export class App extends React.Component<IAppProps, any> {

    state = {
        init: false
    };
    constructor(props: IAppProps) {
        super(props);
    }

    public componentDidMount() {
        this.getLocale();

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
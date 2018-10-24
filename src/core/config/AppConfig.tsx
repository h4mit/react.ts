import axios from 'axios';
import * as config from 'react-global-configuration';

export class AppConfig {

    public static init(): void {
        axios.get(`./conf/config.json`)
            .then(res => {
                config.set(res.data);
            }).catch(err => {
                console.log('Can\'t load Configuration file', err);
            });
    }

}
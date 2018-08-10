import { Injectable } from '@angular/core';
import { Config } from '../models/config';

import { HttpClient} from '@angular/common/http';



@Injectable()
export class AppConfig extends Config {

    constructor(private http: HttpClient) {
        super();
    }

    load(): Promise<any> {
        return this.http.get<Config>('ekoschedle.config.json')
            .toPromise()
            .then((config: Config) => Object.assign(this, config))
            .catch((error) => console.error(error));
    }
}

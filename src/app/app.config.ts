import { Injectable } from '@angular/core';

const APP_CONFIG = {
    name: 'The Schikterica',
    base: 'ekobit/api'
};


@Injectable()
export class AppConfig {
    constructor() { }

    name: String;
    base: String;

    init(): void {
        Object.assign(this, APP_CONFIG);
    }
}


export function AppConfigFactory(appConfig: AppConfig) {
    return () => appConfig.init();
}

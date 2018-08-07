import { CanActivate } from "../../node_modules/@angular/router";
import { AuthService } from "./shared/services/auth.service";
import { of } from "../../node_modules/rxjs";

export class AuthGuard implements CanActivate{

    constructor(public auth: AuthService) {}
    
    canActivate() {
        if (this.auth.isLoggedIn()) {
            return of(true);
        }
        return this.auth.logIn();
    }

}
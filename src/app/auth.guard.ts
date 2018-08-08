import { CanActivateChild } from "@angular/router";
import { UserService } from "./shared/services/user.service";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivateChild{

    constructor(public auth: UserService) {}
    
    canActivateChild() {
        if (this.auth.isUserDefined()) {
            return of(true);
        }
        return this.auth.getUser();
    }

}
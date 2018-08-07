import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class AuthService extends HttpBaseService<User> {


    userInfo: User; 

    private usersUrl = 'api/users';

    constructor(http: HttpClient) { super(http, "api/users"); }

    isLoggedIn(): boolean {
        return this.userInfo != null;
    }
    
    logIn(): Observable<boolean> {
        return this.http.get<User>(this.usersUrl).pipe(map( response => {
            this.userInfo = response;
            return (response.userId !== undefined);
        }));
    }
    
}

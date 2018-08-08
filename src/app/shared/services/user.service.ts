import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' }),
    withCredentials: true
  };

@Injectable()
export class UserService extends HttpBaseService<User> {

    userInfo: User; 

    constructor(http: HttpClient) { super(http, "http://192.168.1.23:81/api/user"); }

    isUserDefined(): boolean {
        return this.userInfo != null;
    }
    
    getUser(): Observable<boolean> {
        return this.http.get<User>(this.url, httpOptions).pipe(map( response => {
            this.userInfo = response;
            return (response.userId !== undefined);
        }));
    }
    
}

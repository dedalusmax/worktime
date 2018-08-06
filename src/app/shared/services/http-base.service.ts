import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export abstract class HttpBaseService<T>{

    private url : string;

    constructor(private http: HttpClient, url: string) {
        this.url = url;
     }
  
    getAll(): Observable<T[]>{
        return this.http.get<T[]>(this.url).pipe(tap(project => console.log(project)), catchError(this.handleError<any>('get', [])));
    }

    getById(id:number): Observable<T>{
        return this.http.get<T>(`${this.url}/${id}`).pipe(tap(project => console.log(project)),catchError(this.handleError<any>('get')));
    }

    addOne(objectToAdd : T): Observable<T> {
        return this.http.post<T>(this.url, objectToAdd, httpOptions).pipe(
          catchError(this.handleError<T>('add'))
        );
      }


    private handleError<U> (operation = 'operation', result?: U) {
        return (error: any): Observable<U> => {
    
        console.error(error);
    
        return of(result as U);
        };
    }

}
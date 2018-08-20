import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConfig } from './app.config';
import { catchError, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' }),
    withCredentials: true
  };


export abstract class HttpBaseService<T> {

    protected url: string;

    constructor(protected http: HttpClient,
        protected config: AppConfig,
        url: string
    ) {
        this.url = this.config.webAPI + url;
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url, httpOptions)
            .pipe(tap(project => console.log(project)), catchError(this.handleError<any>('get')));
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`, httpOptions)
            .pipe(tap(project => console.log(project)), catchError(this.handleError<any>('get')));
    }

    addOne(objectToAdd: T): Observable<T> {
        return this.http.post<T>(this.url, objectToAdd, httpOptions).pipe(
          catchError(this.handleError<T>('add'))
        );
      }


    protected handleError<U> (operation = 'operation', result?: U) {
        return (error: any): Observable<U> => {

        console.error(error);

        return of(result as U);
        };
    }
}

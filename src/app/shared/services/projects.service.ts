import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { Project } from '../models/project';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private projectsUrl = 'api/projects';

  getProjects(): Observable<Project[]>{

    return this.http.get<Project[]>(this.projectsUrl).pipe(tap(project => console.log(project)), catchError(this.handleError<any>('getProjects', [])));
  }

  getProject(id:number): Observable<Project>{
    return this.http.get<Project>(`${this.projectsUrl}/${id}`).pipe(tap(project => console.log(project)),catchError(this.handleError<any>('getProject')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}

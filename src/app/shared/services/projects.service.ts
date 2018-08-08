import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { HttpBaseService } from './http-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends HttpBaseService<Project> {

  constructor(http: HttpClient) {
    super(http, 'http://192.168.1.23:81/api/project');
  }

}

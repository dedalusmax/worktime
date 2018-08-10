import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { HttpBaseService } from './http-base.service';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends HttpBaseService<Project> {

  constructor(
    protected http: HttpClient,
    protected config: AppConfig
  ) {
    super(http, config, 'project');
  }

}

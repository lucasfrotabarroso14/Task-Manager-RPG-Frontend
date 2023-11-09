import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from './task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = Environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}tasks/`

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<{result : Task[]}>(this.apiUrl)
      .pipe(
        map(response => response.result)
      );

  }
}

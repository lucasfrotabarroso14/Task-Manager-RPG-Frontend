import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task,TaskLevelCount,TaskStatusCount } from './task-interface';

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
  updateTask(task:Task){
    return this.http.put(`${this.apiUrl}${task.id_task}/`, task)
  }

  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }

  countTasks(): Observable<TaskStatusCount> {
    return this.http.get<{result : TaskStatusCount}>(`${this.apiUrl}status_count`)
    .pipe(
      map(response => response.result)
    )
  }

  countTaskLevel(): Observable<TaskLevelCount> {
    return this.http.get<{result : TaskLevelCount}>(`${this.apiUrl}dificuldade_count`)
    .pipe(
      map(response => response.result)
    )
  }

}

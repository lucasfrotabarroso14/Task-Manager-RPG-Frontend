import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Task, TaskLevelCount, TaskStatusCount } from './task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}tasks/`;
  
  public tasksSubject = new BehaviorSubject<Task[]>([]);
  public pendingTasksSubject = new BehaviorSubject<Task[]>([]);
  public chartDataSubject = new BehaviorSubject<TaskStatusCount | null>((null))

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<{ result: Task[] }>(this.apiUrl).pipe(
      map(response => response.result),
      map(tasks => {
        this.tasksSubject.next(tasks);
        this.pendingTasksSubject.next(tasks.filter(task => task.status === "Pendente"));
        this.updateChartData()
        return tasks;
      })
    );
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(`${this.apiUrl}${task.id_task}/`, task).pipe(
      map(response => {
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = currentTasks.map(t => (t.id_task === task.id_task ? task : t));
        this.tasksSubject.next(updatedTasks);
        this.pendingTasksSubject.next(updatedTasks.filter(t => t.status === "Pendente"));
        this.updateChartData()
        return response;
      })
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      map(response => {
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = [...currentTasks, response];
        this.tasksSubject.next(updatedTasks);
        this.pendingTasksSubject.next(updatedTasks.filter(t => t.status === "Pendente"));
        return response;
      })
    );
  }

  countTasks(): Observable<TaskStatusCount> {
    return this.http.get<{ result: TaskStatusCount }>(`${this.apiUrl}status_count`).pipe(
      map(response => response.result)
    );
  }

  countTaskLevel(): Observable<TaskLevelCount> {
    return this.http.get<{ result: TaskLevelCount }>(`${this.apiUrl}dificuldade_count`).pipe(
      map(response => response.result)
    );
  }

  deleteTask(id_task: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id_task}/`).pipe(
      map(response => {
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = currentTasks.filter(task => task.id_task !== id_task);
        this.tasksSubject.next(updatedTasks);
        this.pendingTasksSubject.next(updatedTasks.filter(t => t.status === "Pendente"));
        this.updateChartData()
        return response;
      })
    );
  }

  getPendingTasksSubject(): BehaviorSubject<Task[]> {
    return this.pendingTasksSubject;
  }

   updateChartData(): void {
    this.countTasks().subscribe((taskCountedFromServer: TaskStatusCount) => {
      this.chartDataSubject.next(taskCountedFromServer);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks/task-interface';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []; // Isso deve ser um array de Task
  tasks_pendentes: Task[]=[]

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksFromServer: Task[]) => {
      
       this.tasks = tasksFromServer;

       this.tasks_pendentes = this.tasks.filter(tasks => tasks.status=="Pendente")
      
    });
  }
}
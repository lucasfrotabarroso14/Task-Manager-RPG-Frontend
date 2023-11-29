import { Component, OnInit } from '@angular/core';
import { Task, TaskLevelCount } from 'src/app/tasks/task-interface';
import { TaskService } from 'src/app/tasks/task.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  tasks: Task[] = [];
  currentsTasks : Task[] = [];
  tasksLevelCounts !: TaskLevelCount

  constructor(private taskService : TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksFromServer: Task[]) => {
      this.tasks = tasksFromServer;
      this.currentsTasks = this.tasks.filter(task=> task.status == 'Em Andamento')
      console.log(this.currentsTasks);
      
    this.taskService.countTaskLevel().subscribe((taskLevelCountedFromServer : TaskLevelCount) => {
      this.tasksLevelCounts = taskLevelCountedFromServer;
      
      

    })
      
      
      
      
    });
  }

  

}


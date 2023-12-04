
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks/task-interface';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  tasks: Task[] = []; // Isso deve ser um array de Task
  selectedTask !: Task 
  visible: boolean = false
  descricao_task : string | null = null


  constructor(private taskService: TaskService) {}
  

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksFromServer: Task[]) => {
      this.tasks = tasksFromServer;

      
    });

    this.taskService.tasksSubject.subscribe((updatedTasks : Task[]) => {
      this.tasks = updatedTasks
    })
  }
  onTaskSelected(task : Task){
    this.selectedTask = task
    
  }
  showTaskDetails(task:Task){
    this.selectedTask = task
    this.descricao_task = this.selectedTask.descricao
    
    
    this.showModal()
  }
  showModal(){
    this.visible = !this.visible
   
    
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id_task).subscribe(
      (response: any) => {
        console.log("Task excluida com sucesso", response);
        this.taskService.updateChartData()
        
        
      },
      (error) => {
        console.log("Erro ao excluir a task no backend", error);
      }
    );
  }
}

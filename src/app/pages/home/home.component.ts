import { Component, OnInit } from '@angular/core';
import { Task, TaskStatusCount } from 'src/app/tasks/task-interface';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks_pendentes: Task[] = [];
  tasksCounts!: TaskStatusCount;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe();

    this.taskService.pendingTasksSubject.subscribe((pendingTasks: Task[]) => {
      this.tasks_pendentes = pendingTasks;
     
    });

    this.taskService.chartDataSubject.subscribe((chartData : TaskStatusCount | null) =>{
      if(chartData){
        this.tasksCounts = chartData
      }
    })

    // this.taskService.countTasks().subscribe((taskCountedFromServer: TaskStatusCount) => {
    //   this.tasksCounts = taskCountedFromServer;
    //   console.log("dados enviados", this.tasksCounts);
    // });
  }

  aproveTask(task: Task): void {
    console.log(task);
    task.status = "Em Andamento";
    console.log(task);

    this.taskService.updateTask(task).subscribe(
      (response: any) => {
        console.log("Status da task atualizado com sucesso no backend", response);
        this.tasks_pendentes = this.tasks_pendentes.filter((item) => item !== task);
        this.updateChartData()
       
        
      },
      (error) => {
        console.error("Erro ao atualizar o status da task no backend", error);
      }
    );
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id_task).subscribe(
      (response: any) => {
        console.log("Task excluida com sucesso", response);
        this.updateChartData()
        
      },
      (error) => {
        console.log("Erro ao excluir a task no backend", error);
      }
    );
  }

  updateChartData(): void{
    this.taskService.updateChartData()
  }
}

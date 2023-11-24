import { Component, OnInit } from '@angular/core';
import { Task,TaskStatusCount } from 'src/app/tasks/task-interface';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []; // Isso deve ser um array de Task
  tasks_pendentes: Task[]=[]
  tasksCounts !: TaskStatusCount

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksFromServer: Task[]) => {
      
       this.tasks = tasksFromServer;

       this.tasks_pendentes = this.tasks.filter(tasks => tasks.status=="Pendente")
    });

    this.taskService.countTasks().subscribe((taskCountedFromServer: TaskStatusCount) => {
      this.tasksCounts = taskCountedFromServer;
      console.log("dados enviados",this.tasksCounts); //aqui ele retorna o objeto do backend que eu quero     
    });
      
  }
  aproveTask(task:Task){
    console.log(task);
    task.status="Em Andamento"
    console.log(task);
    
    this.taskService.updateTask(task).subscribe(
      (response:any)=> {
        console.log("Status da task atualizado com sucesso no backend", response);
        this.tasks_pendentes= this.tasks_pendentes.filter((item)=> item !== task)

      },
      (error)=>{
        console.error("Erro ao atualizar o status da task no backend", error);
        
      }
    )
  
    
  }
}
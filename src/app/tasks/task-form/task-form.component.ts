import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{
  constructor(private taskService : TaskService){}



  statuses : any[]=[
    {label : 'Pendente', value: 'Pendente'},
    {label:'Em Andamento', value: 'Em Andamento'},
    {label:'Concluido', value:'Concluido'}
  ]
  taskForm!: FormGroup;
  visible : boolean= true

  ngOnInit(): void {
    this.taskForm= new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      dificuldade : new FormControl(''),
      status : new FormControl(''),
      data_conclusao: new FormControl(new Date().toISOString().split('T')[0])
    })
      
  }
  onSubmit(){
    if(this.taskForm.valid){
      this.taskService.addTask(this.taskForm.value).subscribe({
        next : (newTask) => {
          this.taskForm.reset();
          this.visible= false
          console.log("task enviada");
          
      
        },
        error:(error) =>{
          console.log("Erro ao adicionar task:", error);
          
        }
      })
    }

  }

  
  

}

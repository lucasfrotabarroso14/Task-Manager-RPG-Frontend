import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{
  constructor(private taskService : TaskService){}

  dificuldade_options : any[]=[
    {label : 'Fácil', value: 'Facil'},
    {label:'Médio', value: 'Medio'},
    {label:'difícil', value:'dificio'}
  ]

  status_options : any[]=[
    {label : 'Pendente', value: 'Pendente'},
    {label:'Em Andamento', value:'Em Andamento'},
    {label:'Concluído', value:'Concluído'}
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
      let formData = { ...this.taskForm.value };

    // Formatando a data de conclusão
    if (formData.data_conclusao) {
      formData.data_conclusao = formatDate(formData.data_conclusao, 'yyyy-MM-dd', 'en-US');
    }
      this.taskService.addTask(formData).subscribe({
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

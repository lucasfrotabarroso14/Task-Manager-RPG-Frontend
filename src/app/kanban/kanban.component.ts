import { Component, Input } from '@angular/core';
import { Task } from '../tasks/task-interface';
import { TaskService } from '../tasks/task.service';

interface Category {
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent  {
  @Input() set tasks(value: Task[]) {
    this._tasks = value || [];
    this.categorizeTasks(); // Chama categorizeTasks sempre que a lista de tasks é atualizada
    console.log("Tasks recebidas:", this._tasks);
  }
  
  get tasks(): Task[] {
    return this._tasks;
  }

  private _tasks: Task[] = [];
  private draggedTask?: Task;

  categories: Category[] = [
    { name: 'Pendente', tasks: [] },
    { name: 'Em Andamento', tasks: [] },
    { name: 'Concluido', tasks: [] }
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.categorizeTasks();
  }

  onDragStart(event: DragEvent, task: Task): void {
    this.draggedTask = task;
    event.dataTransfer?.setData('text/plain', task.id_task.toString());
    console.log("Arrastando a tarefa:", task.titulo);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
  }

  onDragEnd(event: DragEvent): void {
    event.preventDefault();
    this.draggedTask = undefined;
  }

  onDrop(event: DragEvent, category: Category): void {
    event.preventDefault();
    if (this.draggedTask) {
      this.draggedTask.status = category.name;
      this.taskService.updateTask(this.draggedTask).subscribe(() => {
        this.categorizeTasks();
        console.log("Tarefa solta na categoria:", category.name);
      });
      this.draggedTask = undefined;
    }
  }

  categorizeTasks(): void {
    this.categories.forEach(category => {
      category.tasks = this.tasks.filter(task => task.status === category.name);
    });
  }
  openModal(){
    console.log("deu certo")
    
  }
}


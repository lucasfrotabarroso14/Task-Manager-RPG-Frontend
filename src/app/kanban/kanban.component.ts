import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks/task-interface';
import { TaskService } from '../tasks/task.service';

interface Column {
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {
  @Output() eventEmitter = new EventEmitter();
  @Input() set tasks(value: Task[]) {
    this._tasks = value || [];
    this.categorizeTasks();
    console.log("Tasks recebidas:", this._tasks);
  }

  get tasks(): Task[] {
    return this._tasks;
  }

  private _tasks: Task[] = [];
  private draggedTask?: Task;
  public dragOverColumn?: Column;

  columns: Column[] = [
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

  onDragOver(event: DragEvent, column: Column): void {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
    this.dragOverColumn = column;
  }

  onDragEnd(event: DragEvent): void {
    event.preventDefault();
    this.draggedTask = undefined;
    this.dragOverColumn = undefined;
  }

  onDrop(event: DragEvent, column: Column): void {
    event.preventDefault();
    if (this.draggedTask && this.dragOverColumn) {
      if (this.draggedTask.status !== this.dragOverColumn.name) {
        const sourceColumn = this.draggedTask.status ? this.getColumnByName(this.draggedTask.status) : undefined;
        if (sourceColumn) {
          this.removeTaskFromColumn(this.draggedTask, sourceColumn);
        }

        this.dragOverColumn.tasks.push(this.draggedTask);

        this.draggedTask.status = this.dragOverColumn.name;

        this.taskService.updateTask(this.draggedTask).subscribe(() => {
          this.categorizeTasks();
          console.log("Tarefa solta na coluna:", column.name);
        });
      }

      this.draggedTask = undefined;
      this.dragOverColumn = undefined;
    }
  }

  categorizeTasks(): void {
    this.columns.forEach(column => {
      column.tasks = this.tasks.filter(task => task.status === column.name);
    });
  }

  openModal(task: Task): void {
    this.eventEmitter.emit(task);
  }

  getColumnByName(name: string): Column | undefined {
    return this.columns.find(column => column.name === name);
  }

  removeTaskFromColumn(task: Task, column: Column): void {
    const index = column.tasks.indexOf(task);
    if (index !== -1) { //VER SE A TASK FOI ENCONTRADA NO ARRAY
      column.tasks.splice(index, 1); //INDEX E O 1 VAI DIZER QUE SO VAI REMOVER 1
    }
  }
}

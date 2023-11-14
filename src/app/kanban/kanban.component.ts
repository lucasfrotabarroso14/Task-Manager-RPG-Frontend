import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../tasks/task-interface';

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
  private _tasks: Task[] = [];

  @Input() set tasks(value: Task[]) {
    this._tasks = value || [];
    this.categorizeTasks();
  }

  get tasks(): Task[] {
    return this._tasks;
  }

  categories: Category[] = [
    { name: 'Pendente', tasks: [] },
    { name: 'Em Andamento', tasks: [] },
    { name: 'Concluído', tasks: [] }
  ];


  categorizeTasks(): void {
    this.categories.forEach(category => {
      category.tasks = this._tasks.filter(task => task.status === category.name);
    });
  }
}

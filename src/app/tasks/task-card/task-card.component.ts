import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task-interface';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task 
  @Output() eventEmitter = new EventEmitter();
  @Output() eventEmitter02 = new EventEmitter();

  ngOnInit(): void {
      
  }
  onClick01(){
    this.eventEmitter.emit()

    
  }
  onClick02(){ //para
    this.eventEmitter02.emit()
  }

  

  

}

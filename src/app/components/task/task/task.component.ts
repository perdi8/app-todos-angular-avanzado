import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() tarea: Task = {
    ID: 1,
    title: '',
    description: '',
    responsable: '',
    urgencia: 1,
    initialDate: new Date(),
    finalDate: new Date(),
  };
  @Output() eventEmitterTaskDetail = new EventEmitter();
  @Output() eventEmitterTaskDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteTask() {
    this.eventEmitterTaskDelete.emit(this.tarea);
  }

  onNavigate() {
    this.eventEmitterTaskDetail.emit(this.tarea);
  }

  getColor(): string {
    if (this.tarea === undefined) {
      return '';
    }
    switch (this.tarea.urgencia) {
      case 1:
        return '#EF4816';
      case 2:
        return '#EA631F';
      case 3:
        return '#EEAE38';
      default:
        return '#57B9B0';
    }
  }
}

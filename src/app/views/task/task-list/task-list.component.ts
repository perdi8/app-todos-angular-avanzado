import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  listSubscription: Subscription = new Subscription();

  ID: number = 2;
  title: string = '';
  description: string = '';
  urgencia: number = 1;
  responsable: string = '';
  initialDate: Date = new Date();
  finalDate: Date = new Date();

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.listSubscription = this.taskService.getAllTasks().subscribe(
      (response: Task[]) => {
        this.taskList = response;
      },
      (error) => {
        console.error('error caught in component Contact URL');
      }
    );
    if (history.state.data) {
      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].ID == history.state.data.ID) {
          this.taskList[i] = history.state.data;
        }
      }
      // console.log(history.state.data.ID);
    }
  }

  crearTarea(): void {
    let nuevaTarea: Task = new Task(
      (this.ID = this.taskList.length + 1),
      this.title,
      this.description,
      this.urgencia,
      this.responsable,
      this.initialDate,
      this.finalDate
    );
    this.taskList.push(nuevaTarea);
  }

  eventEmitterTaskDetail(tarea: any) {
    this.router.navigate([`/todos/${tarea.ID}`], {
      state: {
        data: this.taskList[tarea.ID - 1],
      },
    });
  }

  eventEmitterTaskDelete(tarea: Task) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].ID === tarea.ID) {
        console.log(this.taskList[i]);
        this.taskList.splice(i, 1);
      }
    }
  }

  ngOnDestroy() {
    // Unsubscribe of all subscriptions
    this.listSubscription.unsubscribe();
  }
}

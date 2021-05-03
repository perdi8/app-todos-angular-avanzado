import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASKS } from 'src/app/mocks/task.mock';
import { Task } from '../models/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAllTasks(): Observable<Task[]> {
    let observable = Observable.create((observer: any) => {
      observer.next(TASKS); // Next will send values to the subscriber
      observer.complete(); // This will close the emission of values to the subscriber
    });
    return observable;
  }
}

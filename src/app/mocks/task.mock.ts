import { Task } from 'src/app/models/task/task.model';

export const TASKS: Task[] = [
  {
    ID: 1,
    title: 'Javascript',
    description: 'Tarea de javascript',
    urgencia: 2,
    responsable: 'Miguel',
    initialDate: new Date(),
    finalDate: new Date(),
  },
  {
    ID: 2,
    title: 'Java',
    description: 'Tarea de Hibernate',
    urgencia: 4,
    responsable: 'Miguel',
    initialDate: new Date(),
    finalDate: new Date(),
  },
];

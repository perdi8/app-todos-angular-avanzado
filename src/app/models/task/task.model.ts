import { ITask } from './itask.interface';

export class Task implements ITask {
  ID: number;
  title: string;
  description: string;
  urgencia: number;
  responsable: string;
  initialDate: Date;
  finalDate: Date;

  constructor(
    ID: number,
    title: string,
    description: string,
    urgencia: number,
    responsable: string,
    initialDate: Date,
    finalDate: Date
  ) {
    this.ID = ID;
    this.title = title;
    this.description = description;
    this.urgencia = urgencia;
    this.responsable = responsable;
    this.initialDate = initialDate;
    this.finalDate = finalDate;
  }
}

export interface ITask {
  ID: number;
  title: string;
  description: string;
  urgencia: number;
  responsable: string;
  initialDate: Date;
  finalDate: Date;
}

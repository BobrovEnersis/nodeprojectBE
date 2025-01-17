import { Job } from './job';

export interface Employee {
  firstName: string;
  employeeID: string;
  lastName: string;
  nickName: string;
  age: string;
  mainOffice: string;
  yearsAtEnersis: string;
  happiness: string;
  jobID: string;
}
/** This class combines the information of the employee itself with the more detailed infos about the Job */
export class EmployeeDetail {
  constructor(public employee: Employee, public job: Job) {}
}

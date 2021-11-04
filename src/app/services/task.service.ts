import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '../interfaces/ITask';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor (private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }

  updateTaskReminder(task: ITask): Observable<ITask> {
    console.log("updateTaskReminder");
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url, task, headerOptions);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, headerOptions);
  }

}

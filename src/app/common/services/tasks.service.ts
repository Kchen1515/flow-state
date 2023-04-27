import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  model: string = 'tasks'

  constructor(private http: HttpClient) {}

  //**  CRUD FUNCTIONALITY  */

  all() {
    return this.http.get(this.getUrl());
  }

  find(id: string) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(task: Task) {
    return this.http.post(this.getUrl(), task);
  }

  update(task: Task) {
    return this.http.put(this.getUrlWithID(task.id), task);
  }

  delete(id: string) {
    return this.http.delete(this.getUrlWithID(id));
  }

  //** HELPER FUNCTIONS */
  private getUrl(){
    return `${BASE_URL}/${this.model}`
  }
  private getUrlWithID(id:string) {
    return `${this.getUrl()}/${id}`;
  }
}

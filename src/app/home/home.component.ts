import { Component, OnInit } from '@angular/core';
import { Task } from '../common/models/task';
import { TasksService } from '../common/services/tasks.service';
const emptyTask: Task = {
  id: '',
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService){}

  ngOnInit(): void {
    // this.tasks = this.taskService.tasks
    this.fetchTask()
  }



  selectedTask = emptyTask;

  selectTask(task:any){
    this.selectedTask = {...task};
  }

  fetchTask(){
    this.taskService.all()
      .subscribe((result: any) => this.tasks = result)
  }
  saveTask(task: Task){ // SIMILAR TO AN UPSERT FUNCTION
    if(task.id){
      this.updateTask(task);
    } else {
      this.createTask(task);
    }
  }

  createTask(task: Task){
    this.taskService.create(task)
      .subscribe(result => this.fetchTask())
  }

  updateTask(task: Task){
    this.taskService.update(task)
      .subscribe(result => this.fetchTask())
  }

  deleteTask(taskId:any){
    this.taskService.delete(taskId)
      .subscribe(result => this.fetchTask())
  }

  resetForm(){
    this.selectTask({...emptyTask})
  }
}

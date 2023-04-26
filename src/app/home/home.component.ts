import { Component, OnInit } from '@angular/core';
import { Task } from '../common/models/task';
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


export class HomeComponent {

  tasks = [
    {
      id: 1,
      title: "Take out the trash",
      description: "I need to take out the trash at this time",
      percentComplete: 25,
      favorite: true
    },
    {
      id: 2,
      title: "Homework",
      description: "I have a math assignment due at a certain time",
      percentComplete: 60,
      favorite: false
    }
  ]

  selectedTask = emptyTask;

  selectTask(task:any){
    this.selectedTask = task;
  }

  deleteTask(taskId:any){
    console.log(`Delete Task ${taskId}`)
  }

  resetForm(){
    this.selectTask({...emptyTask})
  }

}

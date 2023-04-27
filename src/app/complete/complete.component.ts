import { Component, OnInit } from '@angular/core';
import { TasksService } from '../common/services/tasks.service';
import { Task } from '../common/models/task';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent  {
  // tasks: Task[] = []
  // constructor(private tasksService: TasksService){}

  // ngOnInit(): void {
  //     this.tasks = this.tasksService.tasks
  // }

}

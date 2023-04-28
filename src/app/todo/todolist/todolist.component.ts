import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/common/models/task';
import { TasksService } from 'src/app/common/services/tasks.service';

const emptyTask: Task = {
  id: '',
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent{
  @Input() tasks: Task[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../common/models/task';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.scss']
})
export class TododetailsComponent {
  @Input() selectedTask: Task = {
    id: '',
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  }
  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter()
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flow-state';
  links = [
    {path: '/home', icon:'home', title: 'Home'},
    {path: '/complete', icon:'check_circle', title: 'Complete'},
    {path: '/todo', icon:'list', title: 'To Do List'},

  ]
}

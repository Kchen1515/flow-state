import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompleteComponent } from './todo/complete/complete.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: 'complete', component: CompleteComponent
      }
    ]
  },
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

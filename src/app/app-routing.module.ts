import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompleteComponent } from './complete/complete.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'complete', component: CompleteComponent },
  {path: 'todo', component: TodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TododetailsComponent } from './todo/tododetails/tododetails.component';
import { TodoComponent } from './todo/todo.component';
import { CompleteComponent } from './todo/complete/complete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    TododetailsComponent,
    TodoComponent,
    CompleteComponent

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

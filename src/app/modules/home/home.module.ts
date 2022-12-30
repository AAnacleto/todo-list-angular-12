import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { TodoButtonDeleteAllComponent } from './componentes/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './componentes/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTaskComponent} from './components/create-task/create-task.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component'


const routes: Routes = [

  // Formulario de creacion de tareas
  {path:'',component:CreateTaskComponent},
  {path: 'create-task', component: CreateTaskComponent},
  {path: 'task-details',component: TaskDetailsComponent}

   // Comodin que redireciona al home si no existe la url --se coloca la final de la rutas--
  // {path: '**', component: Not404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

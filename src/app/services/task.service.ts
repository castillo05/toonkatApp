import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URL} from './GLOBAL';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public urlBase:string;

  constructor(private http: HttpClient) {
    this.urlBase=URL.url
   }

   createTask(task:any){

     const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })

     return this.http.post(this.urlBase+'create_task',task,{headers});
   }

   createTaskDelivery(task: any){
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })

     return this.http.post(this.urlBase+'create_task',task,{headers});
   }
}

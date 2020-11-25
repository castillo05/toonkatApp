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

   getdetailsTask(task){
     const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })
     return this.http.post(this.urlBase+'get_job_details',task,{headers});
   }

   startTaskService(task){
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })
     return this.http.post(this.urlBase+'start_task',task,{headers});
   }

   detailsTaskService(task){
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })
     return this.http.post(this.urlBase+'get_job_details',task,{headers});
   }

   cancelTaskService(task){
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',


     })
     return this.http.post(this.urlBase+'cancel_task',task,{headers});
   }
}

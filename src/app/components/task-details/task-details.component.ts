import { Component, OnInit } from '@angular/core';
import {TaskDetails} from 'src/app/models/task-details';
import {TaskService} from 'src/app/services/task.service';
import {URL} from '../../services/GLOBAL';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public pickup_task:any
  public api= '';
  public job_ids:any
  public task:any;
  public details:any;
  constructor(private TaskService: TaskService) {
    this.api=URL.key;
  }

  ngOnInit(): void {

    const data=JSON.parse(localStorage.getItem('pickup'));
    this.task=data
    const body={
      api_key:'55666485f3400900585570604e5925401ce2c6ff2edb7e3f551b07',
      job_ids:[data.job_id],
      include_task_history:0
    }



  }


  startTask(job_id:string){
    const task={
      api_key:this.api,
      job_id:job_id,
      job_status:1
    }
    this.TaskService.startTaskService(task).subscribe((res)=>{
      console.log(res)
      if(res){
        Swal.fire('!',res.message, 'success')
      }
    },error=>{
      console.log(error)
    })
  }


  detailsTask(job_id:string){
    let job=[];
    job.push(job_id);
    const task={
      api_key:this.api,
      job_ids:job,
      include_task_history:0
    }
    this.TaskService.detailsTaskService(task).subscribe((res)=>{
      console.log(res)
      if(res.status ===200){
        this.details=res.data;
      }
    },error=>{
      console.log(error)
    })
  }

  cancelTask(job_id:string){

    const task={
      api_key:this.api,
      job_id:job_id,
      job_status:9
    }
    this.TaskService.cancelTaskService(task).subscribe((res)=>{
      console.log(res)
      if(res){
        Swal.fire('!',res.message, 'success')
      }
    },error=>{
      console.log(error)
    })
  }

}

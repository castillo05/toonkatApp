import { Component, OnInit } from '@angular/core';
import {TaskDetails} from 'src/app/models/task-details';
import {TaskService} from 'src/app/services/task.service';
 
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public pickup_task:any
  public api= '55606084f54b5b1f154c266a4b1825401ce0c3fb2edd723c591a03'
  public job_ids:any
  public task:any;
  constructor(private TaskService: TaskService) { 
  
  }

  ngOnInit(): void {
    
    const data=JSON.parse(localStorage.getItem('pickup'));

    const body={
      api_key:'55606084f54b5b1f154c266a4b1825401ce0c3fb2edd723c591a03',
      job_ids:[data.job_id],
      include_task_history:0
    }
  
    this.TaskService.getdetailsTask(body).subscribe((res)=>{
     
      this.task=res.data
       console.log(this.task)
    },error=>{
      console.log(error)
    })

  }

}

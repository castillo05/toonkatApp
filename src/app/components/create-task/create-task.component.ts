import { Component, OnInit } from '@angular/core';
import { Pickup } from 'src/app/models/pickup.model';
import { Delivery } from 'src/app/models/delivery.model';
import {TaskService} from 'src/app/services/task.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {URL} from '../../services/GLOBAL';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;

  public pickup:Pickup;
  public delivery:Delivery;
  public test :any;
  public key = URL.key;
public array_data:any[]=[];

  constructor(private TaskService: TaskService,public fb: FormBuilder,private router: Router) {
    this.pickup=new Pickup(this.key,'','','','','','','','','','0','','0','0','1','1','0','1','0','','','360');
    this.delivery=new Delivery(this.key,'','','','','','','','','','Template_1','0','0','0','1','0','1','-330','636','1','0','0');

    this.taskForm = this.fb.group({
      job_description: ['', [Validators.required]],
      customer_email: ['', [Validators.required]],
      customer_username: ['', [Validators.required]],
      customer_phone: ['', [Validators.required]],
      customer_address: ['', [Validators.required]],
      job_pickup_email: ['', [Validators.required]],
      job_pickup_name: ['', [Validators.required]],
      job_pickup_phone: ['', [Validators.required]],
      job_pickup_address: ['', [Validators.required]],
      order_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {


  }

  onSubmit(){

    this.TaskService.createTask(this.pickup).subscribe((res:any)=> {
      if(!res) return console.log('Error. Tarea no creada');

      if(res.status!=200){
        Swal.fire('!',res.message, 'warning')


      }

      if(res.status===200){
        let task=JSON.parse(localStorage.getItem("pickup"));
        if(task){
          console.log(task)
          this.array_data=task;
          this.array_data.push(res.data)
          localStorage.setItem('pickup',JSON.stringify( this.array_data))
        }else{
          this.array_data.push(res.data)
          localStorage.setItem('pickup',JSON.stringify( this.array_data))
        }
              this.TaskService.createTask(this.delivery).subscribe((res2:any)=> {
                if(!res2) return console.log('Error. Tarea no creada');

                if(res2.status!=200){
                  Swal.fire('!',res2.message, 'warning')
                }

                if(res2.status===200){
                  Swal.fire('!',res.message, 'success')
                  console.log({delivery:res.data})
                   this.router.navigate(['/task-details']);

                }


              },error=>{
                console.log(error)
              })



      }


    },error=>{
      console.log(error)
    })
  }

}

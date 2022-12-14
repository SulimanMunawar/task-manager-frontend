import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: any = [];
  tasks: any = [];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        // console.log(params);
        if(params['listId']){
          this.taskService.getTasks(params['listId']).subscribe((tasks: any ) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = undefined;
        }
      }
    )

    this.taskService.getLists().subscribe((lists) => {
     this.lists = lists;
    })
  }

  onTaskClick(task: any){
    this.taskService.complete(task).subscribe(() => {
      // task is marked completed Successfully 
      console.log("Updated Successfully!!..");
      task.completed = !task.completed;
    })
  }

}

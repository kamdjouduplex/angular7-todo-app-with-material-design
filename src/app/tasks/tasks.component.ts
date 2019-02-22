import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { TodoService } from '../todo.service';
import { Todo } from './../todo.interface';
 import { EdittaskComponent } from './../edittask/edittask.component';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  
  todos: Todo[];

  constructor(
    public dialog: MatDialog,
    private myData: TodoService,
  ) {}
  

  ngOnInit(): void {
    //TODO FIND THE WAY TO REFACTOR THIS CODE
    this.myData.getTodos()
      .subscribe(
        (data: Todo[]) =>  this.todos = data,
        (error: any)   => console.log(error),
        ()             => console.log('all data gets')
      );
  }

  //delete a todo
  deleteItem(_id: string){
    this.myData.deleteTodo(_id)
      .subscribe(
        (res: any) => location.reload(),
        (error: any) => console.log(error)
      )
  }

  //open the edit dialog
  openEditDialog(_id): void {
    this.myData.getTodo(_id)
        .subscribe( 
          (resp: Todo) => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.width = '500px';
            dialogConfig.data = resp;
            const dialogRef = this.dialog.open(EdittaskComponent, dialogConfig);

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
          },
          (error: any) => console.log(error),
          ()=> console.log('complete')
        );
  }
}

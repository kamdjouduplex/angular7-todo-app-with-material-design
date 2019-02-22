import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TodoService } from '../todo.service';
import { Todo } from './../todo.interface';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EdittaskComponent>,
    @Inject(MAT_DIALOG_DATA) public passingData: Todo,
    private myData: TodoService
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onUpdate(formData: any){
    let editedTodo: any = { _id: formData._id, title: formData.title, description: formData.description };
    this.myData.updateTodo(editedTodo)
      .subscribe(
        (data: Todo) => location.reload(),
        (error) => console.log(error)
      );
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TodoService } from '../todo.service';


export interface DialogData {
  toto: string;
}

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private myData: TodoService) {}

  ngOnInit() {
  }

  todos: any[] = this.myData.getTodos();
  lastId: number = this.todos[this.todos.length-1].id;

  onCancel(): void {
    this.dialogRef.close();
  }
  
  onSave(data): void {
    this.myData.addTodo(this.lastId+1, data);
    this.dialogRef.close();
  }

}



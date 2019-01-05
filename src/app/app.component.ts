import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AddtaskComponent } from './addtask/addtask.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  title = 'My First Angular 7 App';

  openDialog(): void {
    const dialogRef = this.dialog.open(AddtaskComponent, 
      {
        width: '500px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

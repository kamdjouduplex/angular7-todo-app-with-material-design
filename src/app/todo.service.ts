import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: any[] = [
    {id: 1, title: 'Hello World!'}
  ];
  constructor() { }

  getTodos(){
    return this.todos;
  }

  addTodo(id:number, title:string){
    return this.todos.push({id: id, title: title});
  }
}

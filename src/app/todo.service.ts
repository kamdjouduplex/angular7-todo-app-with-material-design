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

  deleteTodo(id:number){
    let index = id-1;
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }
}

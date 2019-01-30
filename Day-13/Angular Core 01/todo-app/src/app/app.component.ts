import { Component, OnInit, Input } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todoList = [
    {id: 1, content: 'todo 1', completed: false},
    {id: 2, content: 'todo 2', completed: false},
    {id: 3, content: 'todo 3', completed: false},
  ];
  todoDemo = '';
  constructor() {}

  ngOnInit() {}

  // onPress(event) {
  //   this.todoDemo = event.target.value;
  // }

  onAdd(input) {
    this.todoList.push({id: Math.floor(1000 * Math.random()), content: input.value, completed: false});
    input.value = '';
  }

}

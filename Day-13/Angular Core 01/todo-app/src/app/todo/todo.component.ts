import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Input() todoList;

  compeleted = false;
  content = '';
  constructor() {
  }

  ngOnInit() {
  }
  onDelete() {
    // console.log(this.todo.id);
    // console.log(this.todoList);
    if ( this.todoList.map( x => x.id).includes(this.todo.id) ) {
      this.todoList.splice(this.todoList.map( x => x.id).indexOf(this.todo.id), 1);
    }
  }
  onToggle() {
    // console.log(this.todo.id);
    for (const i of this.todoList) {
      if (i.id === this.todo.id) {
        i.completed = !i.completed;
        // console.log(i);
        // console.log(this.todoList);
      }
    }
  }
}

import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo!: Todo;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() editClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter<void>();

  onTodoClicked(): void {
    this.todoClicked.emit()
  }
  onEditClicked(): void {
    this.editClicked.emit();
  }
  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }

}

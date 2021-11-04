import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: ITask) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: ITask) {
    console.log("onToggle");
    this.onToggleReminder.emit(task);
  }

}

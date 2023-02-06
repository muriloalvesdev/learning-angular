import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input() users: User[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['full_name', 'username', 'status', 'birth_date', 'actions'];

  constructor() {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(user: User) {
    this.edit.emit(user)
  }

  onDelete(user: User) {
    this.delete.emit(user);
  }

}

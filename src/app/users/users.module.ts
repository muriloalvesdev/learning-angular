import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserFormComponent } from './containers/user-form/user-form.component';
import { UsersComponent } from './containers/users/users.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

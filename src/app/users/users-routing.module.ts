import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './containers/user-form/user-form.component';
import { UsersComponent } from './containers/users/users.component';
import { UserResolver } from './guards/user.resolver';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'new', component: UserFormComponent, resolve: { user: UserResolver }},
  {path: 'edit/:username', component: UserFormComponent, resolve: { user: UserResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

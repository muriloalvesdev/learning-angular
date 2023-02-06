import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form = this.formBuilder.group({
    uuid: [''],
    full_name: ['', Validators.required],

    username: ['', [Validators.required]],

    birth_date: ['', [Validators.required]],
    status: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: UserService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    const user: User = this.route.snapshot.data['user'];
    this.form.setValue(user);
  }

  onSubmit() {
    console.log(this.form.value)
    this.service.save(this.form.value)
    .subscribe(
      response => this.onSuccess(),
      exception => this.onError(exception.error.message)
    );
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this.snackBar.open('Usuário salvo com sucesso!', '', { duration: 5000 })
    this.onCancel();
  }

  private onError(message: string) {
    this.snackBar.open(message, '', { duration: 5000 })
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if(field?.hasError('required')) {
      return 'Campo obrigatório.';
    }

    return 'teste error';
  }

}

import { ConfirmationDialogComponent } from './../../components/confirmation-dialog/confirmation-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, config, Observable, of } from 'rxjs';

import { ErrorDialogsComponent } from '../../../shared/components/error-dialogs/error-dialogs.component';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$: Observable<User[]> | null = null;

  displayedColumns = ['full_name', 'username', 'status', 'birth_date', 'actions'];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogsComponent, {
      data: errorMessage
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(user: User) {
    this.router.navigate(['edit', user.username], { relativeTo: this.route })
  }

  onDelete(user: User) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: `Deseja deletar o usuário '${user.username}' ?`
      }

    );

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.delete(user).subscribe(
          () => {
            this.refresh();
            this.snackBarOnMessage('Usuário removido com sucesso!', 'X');
          },
          error => this.onError(error.error.message)
        )
      }
    });
  }

  private refresh() {
    this.users$ = this.userService.list().pipe(
      catchError(error => {
        this.onError('Erro ao buscar usuarios.')
        return of([])
      })
    );
  }

  private snackBarOnMessage(message: string, action: string, ) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

}

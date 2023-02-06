import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialogs',
  templateUrl: './error-dialogs.component.html',
  styleUrls: ['./error-dialogs.component.scss']
})
export class ErrorDialogsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}

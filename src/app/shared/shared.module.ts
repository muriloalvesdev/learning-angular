import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationDialogComponent } from '../users/components/confirmation-dialog/confirmation-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogsComponent } from './components/error-dialogs/error-dialogs.component';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    ErrorDialogsComponent,
    ConfirmationDialogComponent,
    StatusPipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogsComponent,
    ConfirmationDialogComponent,
    StatusPipe
  ]
})
export class SharedModule { }

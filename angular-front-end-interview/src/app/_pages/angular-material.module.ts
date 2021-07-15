import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
  declarations: [
    ModalComponent
  ],
})
export class AngularMaterialModule {}

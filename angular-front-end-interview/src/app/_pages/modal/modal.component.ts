import { Component, Inject, Input } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
@Component({
  selector: 'app-my-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

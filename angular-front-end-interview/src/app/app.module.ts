import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './_pages/main/main.component';
import { CommentFormComponent } from './_pages/comment-form/comment-form.component';
import { CommentDataComponent } from './_pages/comment-data/comment-data.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from './_directives/numbers-only.directive';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ModalComponent } from './_pages/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentFormComponent,
    CommentDataComponent,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html',
  styleUrls: ['./comment-data.component.css'],
})
export class CommentDataComponent implements OnInit {
  comments: any;


  editComment(comment:any) {
    this.dialog.open(ModalComponent, {
      width: '80%',
      height: '80%',
      data: {
        name: comment.name,
        email: comment.email,
        body: comment.body
      },
    });
  }

  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((Response) => {
        this.comments = Response;
        console.log(this.comments);
      });
  }
}

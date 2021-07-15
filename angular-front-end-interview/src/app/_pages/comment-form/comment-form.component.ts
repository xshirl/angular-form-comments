import { Component, OnInit } from '@angular/core';
import { Form } from './form';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  model = new Form('', '', '', '', '');

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  public validateEmail(email:string) {
    return email.includes('@') ? true : false;
  }


  constructor() {}

  ngOnInit(): void {}
}

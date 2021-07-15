import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './_pages/main/main.component';
import { CommentFormComponent } from './_pages/comment-form/comment-form.component';
import { CommentDataComponent } from './_pages/comment-data/comment-data.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        CommentDataComponent,
        CommentFormComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-front-end-interview'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-front-end-interview');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'angular-front-end-interview app is running!'
    );
  });
});

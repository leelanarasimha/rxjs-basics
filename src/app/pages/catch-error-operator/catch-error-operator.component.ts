import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-catch-error-operator',
  templateUrl: './catch-error-operator.component.html',
  styleUrls: ['./catch-error-operator.component.css'],
})
export class CatchErrorOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = new Observable((observer) => {
      observer.next('a');
      observer.next('b');
      observer.error('error occured');
    });

    source$
      .pipe(
        catchError((error, caught) => {
          return caught;
        }),
        take(5)
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

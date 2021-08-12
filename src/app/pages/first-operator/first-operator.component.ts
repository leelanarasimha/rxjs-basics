import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.css'],
})
export class FirstOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );

    // of(1, 2, 3, 4, 5)
    //   .pipe(first((value) => value % 2 === 0))
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );

    // of(1, 3, 5)
    //   .pipe(first((value) => value % 2 === 0))
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );

    of(1, 3, 5, 8)
      .pipe(first((value) => value % 2 === 0, 10))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
  }
}

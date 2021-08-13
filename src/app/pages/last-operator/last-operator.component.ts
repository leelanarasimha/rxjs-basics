import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-last-operator',
  templateUrl: './last-operator.component.html',
  styleUrls: ['./last-operator.component.css'],
})
export class LastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4)
    //   .pipe(last())
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
    of(1, 2, 3, 4)
      .pipe(last((el) => el > 6, 10))
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

import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { skipLast, tap } from 'rxjs/operators';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrls: ['./skip-last-operator.component.css'],
})
export class SkipLastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5)
    //   .pipe(skipLast(2))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    interval(500)
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        skipLast(10)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

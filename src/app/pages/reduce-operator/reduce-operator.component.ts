import { Component, OnInit } from '@angular/core';
import { last, of, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.css'],
})
export class ReduceOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5);

    source$
      .pipe(
        scan((acc, val) => {
          console.log('accumulator ' + acc);
          console.log('Value ' + val);
          return acc + val;
        }, 0),
        last()
      )
      .subscribe((data) => {
        console.log('result ' + data);
      });

    source$
      .pipe(
        reduce((acc, val) => {
          console.log('accumulator ' + acc);
          console.log('Value ' + val);
          return acc + val;
        }, 0)
      )
      .subscribe((data) => {
        console.log('result ' + data);
      });
  }
}

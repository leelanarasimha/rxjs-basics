import { Component, OnInit } from '@angular/core';
import { interval, map, of, scan, startWith } from 'rxjs';

@Component({
  selector: 'app-scan-operator',
  templateUrl: './scan-operator.component.html',
  styleUrls: ['./scan-operator.component.css'],
})
export class ScanOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let firstfibonacci = [0, 1];
    interval(1000)
      .pipe(
        scan(([a, b]) => [b, a + b], firstfibonacci),
        map(([a, b]) => b),
        startWith(...firstfibonacci)
      )
      .subscribe((data) => {
        console.log(data);
      });
    // let source$ = of(1, 2, 3);
    // source$
    //   .pipe(
    //     scan((acc, val) => {
    //       console.log('accumulator' + acc);
    //       console.log('current value' + val);
    //       return acc + val;
    //     }, 0)
    //   )
    //   .subscribe((data) => {
    //     console.log('result ' + data);
    //   });
    //1,3, 6
  }
}

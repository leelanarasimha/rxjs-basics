import { Component, OnInit } from '@angular/core';
import { concatMap, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer-operator',
  templateUrl: './timer-operator.component.html',
  styleUrls: ['./timer-operator.component.css'],
})
export class TimerOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(5000).subscribe((data) => {
      console.log(data);
    });

    timer(5000, 5000).subscribe((data) => {
      console.log(data);
    });

    // let source$ = timer(1000, 2000);
    // source$.subscribe((data) => {
    //   console.log(data);
    // });
    // let data$ = of('a', 'b', 'c');
    // setTimeout(() => {
    //   data$.subscribe((data) => {
    //     console.log(data);
    //   });
    // }, 3000);
    // timer(3000)
    //   .pipe(concatMap(() => data$))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}

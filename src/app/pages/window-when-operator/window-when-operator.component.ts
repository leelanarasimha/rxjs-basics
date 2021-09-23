import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, toArray, windowWhen } from 'rxjs';

@Component({
  selector: 'app-window-when-operator',
  templateUrl: './window-when-operator.component.html',
  styleUrls: ['./window-when-operator.component.css'],
})
export class WindowWhenOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(500);

    source$
      .pipe(
        windowWhen(() => interval(2000)),
        mergeMap((val) => val.pipe(toArray()))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

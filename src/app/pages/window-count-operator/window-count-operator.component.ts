import { Component, OnInit } from '@angular/core';
import { bufferCount, interval, mergeMap, toArray, windowCount } from 'rxjs';

@Component({
  selector: 'app-window-count-operator',
  templateUrl: './window-count-operator.component.html',
  styleUrls: ['./window-count-operator.component.css'],
})
export class WindowCountOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(500);

    source$
      .pipe(
        windowCount(3, 1),
        mergeMap((val) => val.pipe(toArray()))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

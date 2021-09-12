import { Component, OnInit } from '@angular/core';
import { concatAll, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-concat-all-operator',
  templateUrl: './concat-all-operator.component.html',
  styleUrls: ['./concat-all-operator.component.css'],
})
export class ConcatAllOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(10, 2, 4);
    source$
      .pipe(
        map((value) => interval(500).pipe(take(value))),
        concatAll()
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

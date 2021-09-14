import { Component, OnInit } from '@angular/core';
import { concatAll, exhaustAll, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-all-operator',
  templateUrl: './exhaust-all-operator.component.html',
  styleUrls: ['./exhaust-all-operator.component.css'],
})
export class ExhaustAllOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000).pipe(
      filter((value) => value > 0),
      take(4)
    );

    source$
      .pipe(
        map((value) =>
          interval(500).pipe(
            map(
              (val) =>
                `parent interval value ${value} with child interval ${val}`
            ),
            take(3)
          )
        ),
        exhaustAll()
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

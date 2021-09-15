import { Component, OnInit } from '@angular/core';
import { interval, map, switchAll, take } from 'rxjs';

@Component({
  selector: 'app-switch-all-operator',
  templateUrl: './switch-all-operator.component.html',
  styleUrls: ['./switch-all-operator.component.css'],
})
export class SwitchAllOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000).pipe(take(5));

    source$
      .pipe(
        map((value) =>
          interval(500).pipe(
            map(
              (val) =>
                `parent interval value: ${value} with child interval ${val}`
            ),
            take(5)
          )
        ),
        switchAll()
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

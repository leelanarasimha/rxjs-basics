import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.css'],
})
export class DistinctUntilChangedOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 2, 1, 3, 1, 3)
    //   .pipe(distinctUntilChanged())
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    //output: 1,2,1,3
    // of(1, 2, 3, 4)
    //   .pipe(
    //     distinctUntilChanged((prev, cur) => {
    //       return cur === prev + 1;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    //expected: 1
    //output: 1,3

    let employees = [
      { id: 1, name: 'Leela' },
      { id: 3, name: 'Leela Web Dev' },
      { id: 2, name: 'Leela' },
      { id: 4, name: 'Hai Leela' },
    ];

    from(employees)
      .pipe(
        distinctUntilChanged(
          (prev, cur) => {
            return prev === cur;
          },
          (k) => k.id
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

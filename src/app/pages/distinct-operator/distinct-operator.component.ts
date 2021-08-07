import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrls: ['./distinct-operator.component.css'],
})
export class DistinctOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 1, 2, 3, 4)
      .pipe(distinct())
      .subscribe((data) => {
        console.log(data);
      });

    var employees = [
      { id: 1, name: 'Leela' },
      { id: 2, name: 'Leela Web Dev' },
      { id: 3, name: 'Leela' },
    ];

    from(employees)
      .pipe(distinct((x) => x.id))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

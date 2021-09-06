import { Component, OnInit } from '@angular/core';
import { min, of } from 'rxjs';

@Component({
  selector: 'app-min-operator',
  templateUrl: './min-operator.component.html',
  styleUrls: ['./min-operator.component.css'],
})
export class MinOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source$ = of(1, 2, 3, 4, -30, 100, 2000, -1, -10);
    // source$.pipe(min()).subscribe((data) => {
    //   console.log(data);
    // });

    let persons = [
      { name: 'Leela', age: 10 },
      { name: 'Mathew', age: 30 },
      { name: 'John', age: 20 },
    ];

    of(...persons)
      .pipe(min((a, b) => (a.age < b.age ? -1 : 1)))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

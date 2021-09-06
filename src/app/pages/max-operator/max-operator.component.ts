import { Component, OnInit } from '@angular/core';
import { max, of } from 'rxjs';

@Component({
  selector: 'app-max-operator',
  templateUrl: './max-operator.component.html',
  styleUrls: ['./max-operator.component.css'],
})
export class MaxOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source$ = of(1, 2, 3, 100, -1, 34);

    // source$.pipe(max()).subscribe((data) => {
    //   console.log(data);
    // });

    let persons = [
      { name: 'Leela', age: 20 },
      { name: 'Mathew', age: 30 },
      { name: 'John', age: 10 },
    ];

    of(...persons)
      .pipe(
        max((prevPerson, currPerson) =>
          prevPerson.age > currPerson.age ? -1 : 1
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

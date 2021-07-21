import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators-basics',
  templateUrl: './operators-basics.component.html',
  styleUrls: ['./operators-basics.component.css'],
})
export class OperatorsBasicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = interval(1000);

    newObservable.subscribe((number) => {
      if (number % 2 === 0) {
        console.log('Even Number: ' + number);
      }
    });

    newObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((number) => {
          return 'even number:' + number;
        })
      )
      .subscribe((number) => {
        console.log(number);
      });
  }
}

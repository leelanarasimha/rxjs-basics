import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ignoreElements, take } from 'rxjs/operators';

@Component({
  selector: 'app-ignore-elements-operator',
  templateUrl: './ignore-elements-operator.component.html',
  styleUrls: ['./ignore-elements-operator.component.css'],
})
export class IgnoreElementsOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(take(5), ignoreElements())
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html',
  styleUrls: ['./single-operator.component.css'],
})
export class SingleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(single((value) => value > 5))
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

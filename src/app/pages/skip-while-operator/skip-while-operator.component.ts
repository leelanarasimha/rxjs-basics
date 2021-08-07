import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip-while-operator',
  templateUrl: './skip-while-operator.component.html',
  styleUrls: ['./skip-while-operator.component.css'],
})
export class SkipWhileOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 1, 2)
      .pipe(skipWhile((x) => x < 3))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-element-at-operator',
  templateUrl: './element-at-operator.component.html',
  styleUrls: ['./element-at-operator.component.css'],
})
export class ElementAtOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(elementAt(-1, 10))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

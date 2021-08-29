import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip-operator',
  templateUrl: './zip-operator.component.html',
  styleUrls: ['./zip-operator.component.css'],
})
export class ZipOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = of(1, 2, 3, 4, 5);
    let source2$ = of('a', 'b', 'c', 'd', 'e');
    let source3$ = of(100, 200, 300, 400, 500);

    zip([source1$, source2$, source3$], (a, b, c) => {
      return a + ',' + b + ',' + c;
    }).subscribe((data) => {
      console.log(data);
    });
  }
}

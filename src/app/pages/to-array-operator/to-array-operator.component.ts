import { Component, OnInit } from '@angular/core';
import { of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array-operator',
  templateUrl: './to-array-operator.component.html',
  styleUrls: ['./to-array-operator.component.css'],
})
export class ToArrayOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5);
    source$.pipe(take(3), toArray()).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { findIndex, first, of } from 'rxjs';

@Component({
  selector: 'app-find-index-operator',
  templateUrl: './find-index-operator.component.html',
  styleUrls: ['./find-index-operator.component.css'],
})
export class FindIndexOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(121, 1, 2, 13, 3, 4, 10, 5, 12);

    source$.pipe(findIndex((val) => val > 200)).subscribe((data) => {
      console.log(data);
    });

    source$.pipe(first((val) => val > 200)).subscribe((data) => {
      console.log(data);
    });
  }
}

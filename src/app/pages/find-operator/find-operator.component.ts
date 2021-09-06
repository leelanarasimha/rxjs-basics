import { Component, OnInit } from '@angular/core';
import { find, first, of } from 'rxjs';

@Component({
  selector: 'app-find-operator',
  templateUrl: './find-operator.component.html',
  styleUrls: ['./find-operator.component.css'],
})
export class FindOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 10, 3, 20);

    source$.pipe(find((val) => val > 20)).subscribe((data) => {
      console.log(data);
    });

    source$.pipe(first((val) => val > 20)).subscribe((data) => {
      console.log(data);
    });
  }
}

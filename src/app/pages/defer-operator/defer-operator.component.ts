import { Component, OnInit } from '@angular/core';
import { defer, EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-defer-operator',
  templateUrl: './defer-operator.component.html',
  styleUrls: ['./defer-operator.component.css'],
})
export class DeferOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = defer(() => {
      if (Math.random() > 0.5) {
        return EMPTY;
      } else {
        return of('a', 'b', 'c');
      }
    });

    source$.subscribe((data) => {
      console.log(data);
    });

    source$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

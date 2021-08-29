import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.css'],
})
export class ForkJoinOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error();
    });

    let source2$ = of('a', 'b');

    forkJoin({ source1: source1$, source2: source2$ }).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.css'],
})
export class MergeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = interval(1000);
    let source2$ = of('a', 'b');
    let source3$ = of(100, 200, 300);
    let source4$ = new Observable((observer) => {
      observer.next('leeela');
      observer.error('error');
    });

    merge(source1$, source2$, source3$, source4$).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat-operator',
  templateUrl: './concat-operator.component.html',
  styleUrls: ['./concat-operator.component.css'],
})
export class ConcatOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.error();
      }, 1000);
    });
    let source2$ = of('a', 'b', 'c', 'd');

    concat(source1$, source2$).subscribe((data) => {
      console.log(data);
    });
  }
}

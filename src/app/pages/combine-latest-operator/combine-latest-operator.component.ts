import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.css'],
})
export class CombineLatestOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      let number = 0;
      for (let i = 1000; i < 10000; i += 1000) {
        setTimeout(() => {
          if (number === 6) {
            observer.error('error');
          }
          observer.next(number++);
        }, i);
      }
    });

    let source2$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(10);
      }, 5000);
    });

    combineLatest([source1$, source2$]).subscribe((data) => {
      console.log(data);
    });
  }
}

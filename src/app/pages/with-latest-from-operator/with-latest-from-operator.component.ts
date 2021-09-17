import { Component, OnInit } from '@angular/core';
import { interval, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from-operator',
  templateUrl: './with-latest-from-operator.component.html',
  styleUrls: ['./with-latest-from-operator.component.css'],
})
export class WithLatestFromOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000);

    source$.pipe(withLatestFrom(interval(100))).subscribe((data) => {
      console.log(data);
    });
  }
}

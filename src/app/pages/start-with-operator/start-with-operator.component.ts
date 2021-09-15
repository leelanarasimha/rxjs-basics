import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with-operator',
  templateUrl: './start-with-operator.component.html',
  styleUrls: ['./start-with-operator.component.css'],
})
export class StartWithOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000);

    source$.pipe(startWith(...[10, 20, 30])).subscribe((data) => {
      console.log(data);
    });
  }
}

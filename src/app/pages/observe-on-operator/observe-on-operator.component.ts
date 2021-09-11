import { Component, OnInit } from '@angular/core';
import { asyncScheduler, map, observeOn, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-observe-on-operator',
  templateUrl: './observe-on-operator.component.html',
  styleUrls: ['./observe-on-operator.component.css'],
})
export class ObserveOnOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('start scripting');
    let source$ = of(1, 2, 3, 45);

    source$
      .pipe(
        map((data) => {
          console.log('map executing');
          return data * 10;
        }),
        observeOn(asyncScheduler)
      )
      .subscribe((data) => {
        console.log(data);
      });
    console.log('end scripting');
  }
}

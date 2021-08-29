import { Component, OnInit } from '@angular/core';
import { interval, map, race, tap } from 'rxjs';

@Component({
  selector: 'app-race-operator',
  templateUrl: './race-operator.component.html',
  styleUrls: ['./race-operator.component.css'],
})
export class RaceOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = interval(1000).pipe(map((v) => 'first one ' + v));
    let source2$ = interval(3000).pipe(
      tap((v) => {
        throw 'error';
      })
    );
    let source3$ = interval(5000).pipe(map((v) => 'third one ' + v));

    race(source1$, source3$, source2$).subscribe((data) => {
      console.log(data);
    });
  }
}

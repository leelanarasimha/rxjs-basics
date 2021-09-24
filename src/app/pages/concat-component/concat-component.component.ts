import { Component, OnInit } from '@angular/core';
import { concat, concatAll, concatMap, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat-component',
  templateUrl: './concat-component.component.html',
  styleUrls: ['./concat-component.component.css'],
})
export class ConcatComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = interval(1000).pipe(
      map((val) => 'value from source 1' + val),
      take(5)
    );
    let source2$ = interval(500).pipe(
      map((val) => 'value from source 2' + val),
      take(3)
    );

    // concat(source2$, source1$).subscribe((data) => {
    //   console.log(data);
    // });

    // source1$
    //   .pipe(
    //     map((val) => source2$),
    //     concatAll()
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    source1$.pipe(concatMap((val) => source2$)).subscribe((data) => {
      console.log(data);
    });
  }
}

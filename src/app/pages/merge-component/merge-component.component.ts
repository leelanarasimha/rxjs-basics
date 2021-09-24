import { Component, OnInit } from '@angular/core';
import { interval, map, merge, mergeAll, mergeMap, take } from 'rxjs';

@Component({
  selector: 'app-merge-component',
  templateUrl: './merge-component.component.html',
  styleUrls: ['./merge-component.component.css'],
})
export class MergeComponentComponent implements OnInit {
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

    // merge(source1$, source2$).subscribe((data) => {
    //   console.log(data);
    // });

    // source1$
    //   .pipe(
    //     map((val) => source2$),
    //     mergeAll()
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    source1$.pipe(mergeMap((val) => source2$)).subscribe((data) => {
      console.log(data);
    });
  }
}

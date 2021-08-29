import { Component, OnInit } from '@angular/core';
import { concatMap, concatMapTo, from, of, partition, toArray } from 'rxjs';

@Component({
  selector: 'app-partition-operator',
  templateUrl: './partition-operator.component.html',
  styleUrls: ['./partition-operator.component.css'],
})
export class PartitionOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    let data = partition(source$, (value) => value % 2 === 0);

    // data[0].subscribe((d) => {
    //   console.log(d);
    // });

    // data[1].subscribe((d) => {
    //   console.log(d);
    // });

    from(data)
      .pipe(concatMap((d) => d.pipe(toArray())))
      .subscribe((value) => {
        console.log(value);
      });
  }
}

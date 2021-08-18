import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-to-operator',
  templateUrl: './merge-map-to-operator.component.html',
  styleUrls: ['./merge-map-to-operator.component.css'],
})
export class MergeMapToOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMapTo(
          ajax(`https://jsonplaceholder.typicode.com/posts/2`).pipe(
            map((data) => {
              return data.response;
            })
          ),
          2
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

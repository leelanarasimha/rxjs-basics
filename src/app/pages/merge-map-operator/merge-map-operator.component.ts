import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.css'],
})
export class MergeMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMap((id: number) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          );
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

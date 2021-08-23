import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrls: ['./concat-map-operator.component.css'],
})
export class ConcatMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(
        concatMap((id: number) => {
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

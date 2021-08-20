import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.css'],
})
export class SwitchMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(30)
      .pipe(
        filter((id) => id > 0),
        switchMap((id) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          );
        }),
        take(5)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { concatMapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-to-operator',
  templateUrl: './concat-map-to-operator.component.html',
  styleUrls: ['./concat-map-to-operator.component.css'],
})
export class ConcatMapToOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMapTo(
          ajax<string>(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
            map((data: AjaxResponse<string>) => {
              return data.response;
            })
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

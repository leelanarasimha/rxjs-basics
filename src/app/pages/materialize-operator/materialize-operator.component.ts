import { Component, OnInit } from '@angular/core';
import { map, materialize, of } from 'rxjs';

@Component({
  selector: 'app-materialize-operator',
  templateUrl: './materialize-operator.component.html',
  styleUrls: ['./materialize-operator.component.css'],
})
export class MaterializeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5);

    source$
      .pipe(
        map((data) => {
          throw 'caught error';
        }),
        materialize()
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

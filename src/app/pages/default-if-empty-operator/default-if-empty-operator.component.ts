import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, of } from 'rxjs';

@Component({
  selector: 'app-default-if-empty-operator',
  templateUrl: './default-if-empty-operator.component.html',
  styleUrls: ['./default-if-empty-operator.component.css'],
})
export class DefaultIfEmptyOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of();

    source$.pipe(defaultIfEmpty(40)).subscribe((data) => {
      console.log(data);
    });
  }
}

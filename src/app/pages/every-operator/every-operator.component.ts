import { Component, OnInit } from '@angular/core';
import { of, every } from 'rxjs';

@Component({
  selector: 'app-every-operator',
  templateUrl: './every-operator.component.html',
  styleUrls: ['./every-operator.component.css'],
})
export class EveryOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5, 6);

    source$.pipe(every((val) => val < 7)).subscribe((data) => {
      console.log(data);
    });
  }
}

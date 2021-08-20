import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { switchMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-to-operator',
  templateUrl: './switch-map-to-operator.component.html',
  styleUrls: ['./switch-map-to-operator.component.css'],
})
export class SwitchMapToOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(50)
      .pipe(switchMapTo(interval(10)), take(10))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

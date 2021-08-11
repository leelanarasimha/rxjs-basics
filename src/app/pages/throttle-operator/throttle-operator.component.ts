import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.css'],
})
export class ThrottleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        throttle((value) => interval(2000), { leading: true, trailing: false })
      )
      .subscribe((data) => {
        console.log(data);
      });

    //output : 0, 2, 4,6
  }
}

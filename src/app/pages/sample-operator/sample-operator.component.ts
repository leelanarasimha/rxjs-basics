import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample-operator',
  templateUrl: './sample-operator.component.html',
  styleUrls: ['./sample-operator.component.css'],
})
export class SampleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(500)
      .pipe(sample(interval(1000)))
      .subscribe((data) => {
        console.log(data);
      });
  }
}

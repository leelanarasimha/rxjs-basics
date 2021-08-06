import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrls: ['./skip-until-operator.component.css'],
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.buttonEvent = fromEvent(
      document.getElementById('showuntilbutton')!,
      'click'
    );

    interval(500)
      .pipe(skipUntil(this.buttonEvent))
      .subscribe((data) => {
        console.log(data);
        this.numbers.push(data);
      });
  }
}

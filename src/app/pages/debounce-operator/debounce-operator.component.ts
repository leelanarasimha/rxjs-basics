import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.css'],
})
export class DebounceOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    // interval(1000)
    //   .pipe(debounce((value) => interval(value * 100)))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    //output: 0->1->2-.3 -....9.... ()
  }

  ngAfterViewInit() {
    let buttonEvent = fromEvent(
      document.getElementById('button_debounce')!,
      'click'
    );

    buttonEvent.pipe(debounce((value) => interval(1000))).subscribe((data) => {
      console.log(data);
    });
  }
}

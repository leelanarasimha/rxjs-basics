import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css'],
})
export class CancellingObservableComponent implements OnInit {
  timerSubscription!: Subscription;
  constructor() {}

  ngOnInit(): void {
    const newObservable = interval(1000);

    this.timerSubscription = newObservable.subscribe((data) => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);
    });
  }

  cancelTimer() {
    console.log('cancel the observable');
    this.timerSubscription.unsubscribe();
  }
}

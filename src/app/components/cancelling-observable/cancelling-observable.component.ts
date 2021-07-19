import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css'],
})
export class CancellingObservableComponent implements OnInit {
  timerConsoleSubscription!: Subscription;
  timerBrowserSubscription!: Subscription;
  timers: number[] = [];
  constructor() {}

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval executing');
        observer.next(i++);
        if (i === 6) {
          //observer.error('un known error occured');
        }
      }, 1000);

      return () => {
        console.log('called when observer is unsubscribed');
        clearInterval(interval);
      };
    });

    this.timerConsoleSubscription = newObservable.subscribe((data) => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);
    });

    this.timerBrowserSubscription = newObservable.subscribe((data) => {
      this.timers.push(data);
    });

    this.timerConsoleSubscription.add(this.timerBrowserSubscription);
  }

  cancelTimer() {
    console.log('cancel the observable');
    this.timerConsoleSubscription.unsubscribe();
  }
}

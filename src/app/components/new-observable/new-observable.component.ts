import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css'],
})
export class NewObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      let timer = 0;
      for (let i = 0; i <= 5; i++) {
        if (i === 4) {
          observer.error('unknown error. i value is 4');
        }
        observer.next(i);
      }
      observer.complete();
      observer.next(1000);
    });

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done'),
    };

    newObservable.subscribe(observer);
  }
}

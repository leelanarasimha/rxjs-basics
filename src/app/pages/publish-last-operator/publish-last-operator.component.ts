import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  connectable,
  ConnectableObservable,
  interval,
  publishLast,
  take,
} from 'rxjs';

@Component({
  selector: 'app-publish-last-operator',
  templateUrl: './publish-last-operator.component.html',
  styleUrls: ['./publish-last-operator.component.css'],
})
export class PublishLastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source$ = interval(1000).pipe(
    //   take(4),
    //   publishLast()
    // ) as ConnectableObservable<number>;

    // source$.subscribe((data) => {
    //   console.log('observer 1 ' + data);
    // });

    // setTimeout(() => {
    //   source$.subscribe((data) => {
    //     console.log('observer 2' + data);
    //   });
    // }, 4000);

    // source$.connect();

    let source$ = connectable(interval(1000).pipe(take(5)), {
      connector: () => new AsyncSubject(),
    });

    source$.subscribe((data) => {
      console.log('observer 1 ' + data);
    });

    setTimeout(() => {
      source$.subscribe((data) => {
        console.log('observer 2' + data);
      });
    }, 4000);

    source$.connect();
  }
}

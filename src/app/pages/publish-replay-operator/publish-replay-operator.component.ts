import { Component, OnInit } from '@angular/core';
import {
  connectable,
  ConnectableObservable,
  interval,
  publishReplay,
  ReplaySubject,
  share,
} from 'rxjs';

@Component({
  selector: 'app-publish-replay-operator',
  templateUrl: './publish-replay-operator.component.html',
  styleUrls: ['./publish-replay-operator.component.css'],
})
export class PublishReplayOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source$ = interval(1000).pipe(
    //   publishReplay()
    // ) as ConnectableObservable<number>;
    // source$.subscribe((data) => {
    //   console.log('observer 1 ' + data);
    // });
    // setTimeout(() => {
    //   source$.subscribe((data) => {
    //     console.log('observer 2 ' + data);
    //   });
    // }, 4000);
    // source$.connect();

    // let source$ = connectable(interval(1000), {
    //   connector: () => new ReplaySubject(2, 3000),
    // });

    // source$.subscribe((data) => {
    //   console.log('observer 1 ' + data);
    // });
    // setTimeout(() => {
    //   source$.subscribe((data) => {
    //     console.log('observer 2 ' + data);
    //   });
    // }, 4000);
    // source$.connect();

    let source$ = interval(1000).pipe(
      share({ connector: () => new ReplaySubject(2) })
    );

    source$.subscribe((data) => {
      console.log('observer 1 ' + data);
    });
    setTimeout(() => {
      source$.subscribe((data) => {
        console.log('observer 2 ' + data);
      });
    }, 4000);
  }
}

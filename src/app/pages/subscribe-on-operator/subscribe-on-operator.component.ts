import { Component, OnInit } from '@angular/core';
import { asyncScheduler, merge, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-subscribe-on-operator',
  templateUrl: './subscribe-on-operator.component.html',
  styleUrls: ['./subscribe-on-operator.component.css'],
})
export class SubscribeOnOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('start scrpting');
    let source$ = of(1, 2, 3, 4, 5).pipe(subscribeOn(asyncScheduler));
    let source2$ = of(10, 20, 30, 40, 50);

    merge(source2$, source$).subscribe((data) => {
      console.log(data);
    });

    console.log('end scripting');
  }
}

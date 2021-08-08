import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, of, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css'],
})
export class FilterOperatorComponent implements OnInit, OnDestroy {
  eventSubscription!: Subscription;
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(filter((value) => value >= 3))
      .subscribe((data) => {
        console.log(data);
      });
    //output: 4,5

    this.eventSubscription = fromEvent(document, 'click')
      .pipe(
        filter((event: Event) => {
          return (event.target as HTMLElement).tagName === 'A';
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}

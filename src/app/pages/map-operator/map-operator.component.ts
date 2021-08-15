import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css'],
})
export class MapOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4)
    //   .pipe(
    //     map((value) => {
    //       return value * 10;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // of(1, 2, 3, 4)
    //   .pipe(
    //     filter((value) => value % 2 === 0),
    //     map((value) => {
    //       return value * 10;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngAfterViewInit() {
    const mapButtonEvent = fromEvent(
      document.getElementById('map_button')!,
      'click'
    );
    mapButtonEvent
      .pipe(
        map((event: Event) => {
          return {
            x: (event as PointerEvent).clientX,
            y: (event as PointerEvent).clientY,
          };
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

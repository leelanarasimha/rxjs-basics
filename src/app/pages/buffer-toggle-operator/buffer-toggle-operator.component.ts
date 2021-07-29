import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferToggle, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html',
  styleUrls: ['./buffer-toggle-operator.component.css'],
})
export class BufferToggleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let opening = interval(6000).pipe(tap(() => console.log('open')));
    let closing = (data: number) =>
      interval(3000).pipe(tap(() => console.log('close')));
    interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        bufferToggle(opening, closing),
        take(3)
      )
      .subscribe((data) => console.log(data));
  }
}

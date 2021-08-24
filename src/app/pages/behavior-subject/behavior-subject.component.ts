import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let behaviorSubject$ = new BehaviorSubject(0);

    behaviorSubject$.subscribe((data) => {
      console.log('observer 1' + data);
    });

    behaviorSubject$.next(1); //

    behaviorSubject$.subscribe((data) => {
      console.log('observer 2' + data);
    });

    behaviorSubject$.next(2);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.observable();
    this.subjectAsObservable();
  }

  observable() {
    let observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 1 complete');
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log('observer 2' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 2 complete');
      },
    };
    observable$.subscribe(observer1); //1,2,3,complete
    observable$.subscribe(observer2); //1,2,3, complete
  }

  subjectAsObservable() {
    let observable$ = of(1, 2, 3, 4, 5); //execute one tinme
    let subject = new Subject<number>();

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 1 complete');
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log('observer 2' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 2 complete');
      },
    };
    subject.subscribe(observer1);
    subject.subscribe(observer2);

    observable$.subscribe(subject);
  }
}

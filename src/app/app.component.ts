import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-basics';

  postsArray = [
    { title: 'Leela1', description: 'Leela1 description1' },
    { title: 'Leela2', description: 'Leela1 description2' },
    { title: 'Leela3', description: 'Leela1 description3' },
  ];

  postsArrayObservable$ = from(this.postsArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise. sending data');
    }, 3000);
  });

  promiseObservable$ = from(this.promise);

  constructor() {
    this.postsArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done!'),
    });

    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done! promise done'),
    });
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done! promise done'),
    });
  }
}

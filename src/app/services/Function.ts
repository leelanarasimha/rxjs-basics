import { observable, Observable } from 'rxjs';

export function functionObs() {
  console.log('function call');
  return '1';
  return '2'; //dead code
}

export const funcObservable = new Observable((observer) => {
  console.log('observable call');
  observer.next('1');
  observer.next('2');
  setTimeout(() => {
    observer.next('3');
  }, 2000);
});

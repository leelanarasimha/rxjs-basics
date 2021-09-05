import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, generate } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate-operator',
  templateUrl: './generate-operator.component.html',
  styleUrls: ['./generate-operator.component.css'],
})
export class GenerateOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('start scripting');
    let generateComponent: GenerateOptions<number, number> = {
      initialState: 0,
      condition: (x) => x < 3,
      iterate: (x) => x + 1,
      resultSelector: (x) => x,
      scheduler: asyncScheduler,
    };

    let source$ = generate(generateComponent);

    source$.subscribe((data) => {
      console.log(data);
    });
    console.log('end scripting');
  }
}

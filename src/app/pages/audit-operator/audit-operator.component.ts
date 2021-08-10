import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { audit } from 'rxjs/operators';

@Component({
  selector: 'app-audit-operator',
  templateUrl: './audit-operator.component.html',
  styleUrls: ['./audit-operator.component.css'],
})
export class AuditOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(audit((val) => interval(2000)))
      .subscribe((data) => {
        console.log(data);
      });

    //output: 2, 5, 8

    // 0 -> audit  -> interval -> 2000
    // 3 -> audit -> interval -> 2000
    // 6 -> audit -> interval -> 2000
  }
}

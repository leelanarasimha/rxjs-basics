import { Component, OnInit } from '@angular/core';
import { dematerialize, ObservableNotification, of } from 'rxjs';

@Component({
  selector: 'app-dematerialize-operator',
  templateUrl: './dematerialize-operator.component.html',
  styleUrls: ['./dematerialize-operator.component.css'],
})
export class DematerializeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let obsNotifications: ObservableNotification<number>[] = [];
    for (let i = 0; i < 10; i++) {
      obsNotifications.push({
        kind: 'N',
        value: i,
      });
    }

    of(...obsNotifications)
      .pipe(dematerialize())
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

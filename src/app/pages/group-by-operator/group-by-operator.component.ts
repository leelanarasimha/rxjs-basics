import { Component, OnInit } from '@angular/core';
import { from, groupBy, mergeMap, of, reduce, toArray } from 'rxjs';

@Component({
  selector: 'app-group-by-operator',
  templateUrl: './group-by-operator.component.html',
  styleUrls: ['./group-by-operator.component.css'],
})
export class GroupByOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let posts = [
      {
        id: 1,
        likes: 2,
        comments: 4,
      },
      {
        id: 1,
        likes: 4,
        comments: 5,
      },
      {
        id: 2,
        likes: 5,
        comments: 10,
      },
      {
        id: 2,
        likes: 3,
        comments: 7,
      },
    ];
    let source$ = of(1, 2, 3, 4, 5);
    from(posts)
      .pipe(
        groupBy((val) => val.id),
        mergeMap((val) =>
          val.pipe(
            reduce(
              (acc, curr) => {
                acc.id = acc.id || curr.id;
                acc.likes = acc.likes + curr.likes;
                acc.comments = acc.comments + curr.comments;
                return acc;
              },
              { id: 0, likes: 0, comments: 0 }
            )
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

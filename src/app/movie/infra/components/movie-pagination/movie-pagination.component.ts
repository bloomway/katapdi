import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-pagination',
  templateUrl: './movie-pagination.component.html',
  styleUrls: ['./movie-pagination.component.scss'],
})
export class MoviePaginationComponent implements OnInit {
  @Input()
  totalPages: number;
  @Input()
  currentPage: number;

  constructor() {}

  ngOnInit(): void {}

  cssClass(numPage: string): any {
    return {
      'page-link': numPage !== '...',
      'movie__pagination-link': numPage !== '...'
    };
  }
}

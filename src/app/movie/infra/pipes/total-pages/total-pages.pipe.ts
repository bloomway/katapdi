import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPages',
})
export class TotalPagesPipe implements PipeTransform {
  transform(totalPage: number, currentPage: number): Array<string> {

    if (currentPage < 0) {
      return null;
    }

    if (totalPage < 0) {
      return null;
    }

    if (totalPage === 0) {
      return [];
    }

    const result: Array<string> = [];

    if (totalPage <= 8) {
      for (let i = 1; i < totalPage; i++) {
        result.push('' + i);
      }
    } else {
      let idx = currentPage + 1;
      const counterMax = currentPage + 5;
      while (idx < counterMax) {
        result.push('' + idx);
        idx++;
      }
      result.push('...');
    }
    result.push('' + totalPage);
    return result;
  }
}

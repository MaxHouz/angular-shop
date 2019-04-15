import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: Array<any>, value: string, order: boolean = false): any {
    const sortedList = [ ...list ];
    const compareFunction = order
      ? (a, b) => this.compareAscending(a, b)
      : (a, b) => this.compareDescending(a, b);
    sortedList.sort((a, b) => compareFunction(a[value], b[value]));
    return sortedList;
  }

  private compareAscending(a: any, b: any) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  private compareDescending(a: any, b: any) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }
}

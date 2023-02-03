import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlpha',
  pure: false
})
export class SortAlphaPipe implements PipeTransform {
  transform(value: any, prop: string): any {
    if (value.length === 0) {
      return value;
    }
    return this.sortAlpha(value, prop);
  }

  sortAlpha(value, prop) {
    value.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }
}

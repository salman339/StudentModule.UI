import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../services/student';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any, filterString: string): student[] {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    filterString = filterString.toLocaleLowerCase();
    const resultArray = [];
    for (const item of value) {
      if (
        item.firstName.toLocaleLowerCase().includes(filterString) ||
        item.lastName.toLocaleLowerCase().includes(filterString) ||
        item.email.toLocaleLowerCase().includes(filterString)
      ) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}

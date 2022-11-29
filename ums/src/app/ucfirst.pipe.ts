import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): any {
    return value.split(' ')
      .map((word: string) => ' ' + word.substring(0, 1)
      .toLocaleUpperCase() + '' + word.substring(1))
      .join('');
  }

}

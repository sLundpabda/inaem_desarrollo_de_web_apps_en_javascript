import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIcon',
})
export class ToIconPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '✔️' : '❌';
  }

}

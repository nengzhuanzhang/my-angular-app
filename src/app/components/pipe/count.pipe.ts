import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
  standalone:true
})
export class CountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} 元`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==null || value==undefined || value==''){
      return 'NA'
    }
    return value;
  }

}

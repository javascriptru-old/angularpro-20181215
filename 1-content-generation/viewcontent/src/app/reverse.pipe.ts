import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  constructor() {

  }

  transform(value: any, args?: any): any {
    console.log('ReversePipe');
    new Date()
    return 1;
  }

}

// pure function
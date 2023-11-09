import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aSharedPipe'
})
export class ASharedPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

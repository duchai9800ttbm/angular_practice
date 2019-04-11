import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNull'
})
export class CheckNullPipe implements PipeTransform {

  transform(value: string): string {
    return value || 'Không có';
  }

}

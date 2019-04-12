import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prospectStatus'
})
export class ProspectStatusPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'Indifferent':
        return 'Không quan tâm';

      default:
        return 'Không có';
    }
  }

}

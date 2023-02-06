import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'PENDING': return 'pending actions';
      case 'APPROVED': return 'done';
      case 'BLOCKED': return 'block';
    }
    return 'lock'
  }

}

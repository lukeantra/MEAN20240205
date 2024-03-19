import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limistLength',
})
export class LimistLengthPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

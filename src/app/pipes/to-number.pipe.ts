import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {

  public pattern: RegExp = /[$,]+$/;

  transform(value: string): number{
    return value ? Number(value.replace(this.pattern, "")) : Number(value);
  }

}

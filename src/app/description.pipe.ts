import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(description:string,words:number): string {
    return description.split(' ').slice(0,12).join(' ')
    ;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'header'
})
export class HeaderPipe implements PipeTransform {

  transform(title:string,words:number): string {
    return title.split(' ').slice(0,4).join(' ')
    ;
  }


}

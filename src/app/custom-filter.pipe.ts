import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    } else {
      args = args.toLowerCase();
    }
    return value.filter(details => 
      details.title.toLowerCase().includes(args)== true
    );
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  constructor(){}

  transform(value: string): string {
    // return this.reverseString(value);
    return value.split('').reverse().join('');
  }

  reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return this.reverseString(str.substr(1)) + str.charAt(0);
    }

}

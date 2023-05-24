import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'unescape'
})
export class UnEscapePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    const doc = new DOMParser().parseFromString(value, 'text/html');
    return doc.documentElement.textContent;
  }

}

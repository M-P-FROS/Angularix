import { Pipe, PipeTransform } from '@angular/core';
import {Figurine} from './figurine/figurine'


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Figurine: any[], searchText: string): any[] {
    if (!Figurine) {
      return [];
    }
    if (!searchText) {
      return Figurine;
    }
    searchText = searchText.toLocaleLowerCase();

    return Figurine.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}

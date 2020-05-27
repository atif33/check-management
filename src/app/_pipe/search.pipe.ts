import {Pipe, PipeTransform} from '@angular/core';
import {Checks} from '../_model/Checks';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Checks[], searchText: any) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }


    searchText = searchText.toLowerCase();
    return items.filter(check => {
      return (check.name.toLowerCase().includes(searchText));
    });
  }

}



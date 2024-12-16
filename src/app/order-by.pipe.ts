import { Pipe, PipeTransform } from '@angular/core';
import { Figurine } from './figurine/figurine';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Figurine[], order: "asc" | "desc" = "asc"): Figurine[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.prix - b.prix;
      } else if (order === "desc") {
        return b.prix - a.prix;
      }
      return 0;
    });
  }
}

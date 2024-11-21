import { Injectable } from '@angular/core';
import { Figurine } from './figurine';
import { FIGURINES } from './mock-figurine-list';

@Injectable()
export class FigurineService {

getFigurineList():Figurine[]{
  return FIGURINES;
}

getFigurineById(figurineId: number): Figurine|undefined {
  return FIGURINES.find(figurine =>figurine.id == figurineId);
}

getFigurineTypeList(): string[] {
  return ['Gaulois','Romain','animal','Homme','Femme'];

}
}

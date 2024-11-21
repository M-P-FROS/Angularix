import { Pipe, PipeTransform } from '@angular/core';

/*Affiche la couleur correspondant au type de la figurine.
*Prend en argument le type de figurien
*erxemple d'utilisation :
* {{figurine.type | figurinrTypeColor}}
*/ 

@Pipe({
  name: 'figurineTypeColor'
})

export class FigurineTypeColorPipe implements PipeTransform {

  transform(type:string): string {

    let color: string;

    switch (type) {
      case 'Gaulois':
        color = 'blue lighten-1';
        break; 
        case'Romain' :
        color ='yellow lighten-1';
        break;
      case 'Femme' :
        color = 'red lighten-3';
        break;
      case 'Homme' :
        color = 'brown lighten-3';
        break;
      case 'Animal':
       color = 'green lighten-1';
       break;
       default:
        color = 'deep-purple';
        break;

    }
    return 'chip ' + color;
  }
}

/* chip est une class qui affiche un petit rond de couleur*/








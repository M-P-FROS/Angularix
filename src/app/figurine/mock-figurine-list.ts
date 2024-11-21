import { Figurine } from './figurine';

export const FIGURINES: Figurine[]= [
{
id:1,
name:"Asterix",
prix:25,
description:"Cette figurine incarne le courage et l'esprit facétieux du célèbre Gaulois.Avec son casque ailé, sa petite taille et sa potion magique, elle capture l'essence du personnage emblématique.",
pictureUrl: "asterix.jpg",
types:["Gaulois","Homme"],
created:new Date ()
},
{
id:2,
name:"Obelix",
prix:12,
description:"Obélix ! Dans un moment de tranquillité, Obélix et son fidèle allié Idéfix semblent se reposer paisiblement, très certainement à cause de la digestion d'un gros sanglier.",
pictureUrl:'obelix.jpg',
types: ["Gaulois","Homme"],
created:new Date()
},
{
id:3,
name:"Cleopatre",
prix:30,
description:"La Reine des Reines est une souveraine respectée et admirée, mais aussi crainte pour ses célèbres colères dont ses vases font souvent les frais… ",
pictureUrl:'cleopatre.jpg',
types:["Romain","Femme"],
created:new Date()
},
{
id:4,
name:"Idefix",
prix:18,
description:"Le plus fidèle compagnon d’Astérix et Obélix",
pictureUrl:'idefix.jpg',
types:["Gaulois","Animal"],
created:new Date()
}
];
          
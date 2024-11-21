import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Figurine} from '../figurine';
import { FigurineService } from '../figurine.service';


@Component({
  selector: 'app-detail-figurine',
  templateUrl: './detail-figurine.component.html',
  styleUrl: './detail-figurine.component.css',
 })

export class DetailFigurineComponent implements OnInit {

  figurineList:Figurine[];
  figurine:Figurine|undefined;


  constructor(private route:ActivatedRoute,
    private router:Router,
    private figurineService: FigurineService
  ) { }

  ngOnInit(): void {
    const figurineId:string|null = this.route.snapshot.paramMap.get('id');
    if(figurineId) {
      this.figurine = this.figurineService.getFigurineById(+figurineId);
    }   
  }
    goToFifurineList() {
      this.router.navigate(['/figurines']);
    }

    }
  

 


/* accéder au router va permettre d'accéder à l'identifiant id qui est ds la route*/
/* On est allé chercher un service import activatedroute
On injecte dans le composant via le constructeur lg 17
On recupère l'Id dans l'url,en lg 22
en lg 23, si mon identifiant est bien trouvé ds url, je vais attribuer la figurine correspondante*/


/* goToFigurineList() je definis ma méthode pour router le click*/


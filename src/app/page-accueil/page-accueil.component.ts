import { Component, OnInit} from '@angular/core';
import { FIGURINES } from '../figurine/mock-figurine-list';
import { Figurine } from '../figurine/figurine';




@Component({
  selector: 'accueil',
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent implements OnInit {
  figurineList:Figurine[] = FIGURINES;
  orderBy: "asc" | "desc" = "asc";


  

  ngOnInit(): void {
    console.table(this.figurineList);
    this.selectFigurine(this.figurineList[1]);
  }
  
selectFigurine(figurine:Figurine){
  console.log(`Vous.... ${figurine.name,figurine.prix}`);
}
  
  

}

import { Component,OnInit } from '@angular/core';
import { Figurine } from '../figurine';
import { Router } from '@angular/router';
import { FigurineService } from '../figurine.service';


@Component({
  selector: 'app-list-figurine',
  templateUrl: './list-figurine.component.html',
  })


  export class ListFigurineComponent implements OnInit {
  figurineList: Figurine[];

  constructor(
    private router:Router,
    private figurineService: FigurineService) {}

    ngOnInit(){
      this.figurineList = this.figurineService.getFigurineList();
    }

  goToFigurine(figurine:Figurine){
    this.router.navigate(['/figurine',figurine.id]);
  }
}

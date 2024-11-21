import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:`
  <div class='center'>
  <img src='paf.jpg' />
  <h2>Paf, cette page n'existe pas!</h2>
  <a routerLink="/figurines" class="waves-effect waves-teal btn-flat">
  Retourner à la page d'accueil
</a>
  `,


  styles:[]
})
export class PageNotFoundComponent {

}

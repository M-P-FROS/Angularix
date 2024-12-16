import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FigurineService } from './figurine.service';
import { PageAccueilComponent } from '../page-accueil/page-accueil.component';
import { PageAboutComponent } from '../page-about/page-about.component';

const figurineRoutes: Routes = [
  {path: 'figurines', component:ListFigurineComponent},
  {path:'figurine/:id', component:DetailFigurineComponent},
  {path:'accueil', component:PageAccueilComponent},
  {path:'about', component:PageAboutComponent}

];
/* la 3ème route redirige vers la liste des figurines */
/* attention, bien déclarer en tout dernier la PageNotFoundComponent*/



@NgModule({
  declarations: [
    ListFigurineComponent,
    DetailFigurineComponent,
    BorderCardDirective,
    FigurineTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(figurineRoutes)
  ],
  providers:[FigurineService]
})
export class FigurineModule { }

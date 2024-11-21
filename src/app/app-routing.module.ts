import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'figurines',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent }
];
/* la 2ème route redirige vers la liste des figurines */
/* attention, bien déclarer en tout dernier la PageNotFoundComponent*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

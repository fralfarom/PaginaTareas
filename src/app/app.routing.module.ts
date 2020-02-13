import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';


const routes:Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: 'agregar/:id', component: AgregarComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},
  {path:'', pathMatch:'full', redirectTo:'home'},
 ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

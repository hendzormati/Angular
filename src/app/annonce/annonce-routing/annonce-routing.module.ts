import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from '../annonce.component';
import { ListeComponent } from '../liste/liste.component';
import {RouterModule, Routes } from '@angular/router';



// routing
const ROUTES:Routes=[
  {path:"annonce",component:AnnonceComponent,
  children:[{path:"liste",component:ListeComponent}]},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AnnonceRoutingModule { }

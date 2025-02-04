import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from '../annonce-routing/annonce-routing.module';
import { AnnonceComponent } from '../annonce.component';
import { ListeComponent } from '../liste/liste.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }

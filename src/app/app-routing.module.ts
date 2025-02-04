import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceComponent } from './residence/residence.component';


// routing
const routes:Routes=[
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  // always the last one 
  {path:"**",component:NotfoundComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

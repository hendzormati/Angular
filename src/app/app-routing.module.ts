import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { ResidenceUpdateComponent } from './residence-update/residence-update.component';


// routing
const routes:Routes=[
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"addresidence",component:FormResidenceComponent},
  {path:"residence/details/:id",component:ResidenceDetailComponent},
  {path:"residence/update/:id",component:ResidenceUpdateComponent},
  // always the last one  
  // {path:"**",component:NotfoundComponent},

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { NavComponent } from '../nav.component';
import { NavRoutingModule } from '../nav-routing/nav-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }

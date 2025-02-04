import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceModule } from './annonce/annonce/annonce.module';
import { NavModule } from './nav/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidenceComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

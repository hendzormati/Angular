import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceModule } from './annonce/annonce/annonce.module';
import { NavModule } from './nav/nav/nav.module';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import {HttpClientModule} from '@angular/common/http';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { ResidenceUpdateComponent } from './residence-update/residence-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidenceComponent,
    NotfoundComponent,
    FormResidenceComponent,
    ResidenceDetailComponent,
    ResidenceUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    NavModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

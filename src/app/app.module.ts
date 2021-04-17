import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NssComponent } from './club/nss/nss.component';
import { TamilComponent } from './club/tamil/tamil.component';
import { EnglishComponent } from './club/english/english.component';
import { GenderComponent } from './club/gender/gender.component';
import { RotaractComponent } from './club/rotaract/rotaract.component';
import { WdcComponent } from './club/wdc/wdc.component';
import { MathsComponent } from './club/maths/maths.component';
import { PhotoComponent } from './club/photo/photo.component';
import { AadcComponent } from './club/aadc/aadc.component';
import { SdcComponent } from './club/sdc/sdc.component';
import { CulturalComponent } from './club/cultural/cultural.component';
import { MusicComponent } from './club/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClubComponent,
    ContactComponent,
    HomeComponent,
    NssComponent,
    TamilComponent,
    EnglishComponent,
    GenderComponent,
    RotaractComponent,
    WdcComponent,
    MathsComponent,
    PhotoComponent,
    AadcComponent,
    SdcComponent,
    CulturalComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

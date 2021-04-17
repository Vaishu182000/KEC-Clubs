import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { NssComponent } from './club/nss/nss.component';
import { TamilComponent } from './club/tamil/tamil.component';
import { GenderComponent } from './club/gender/gender.component';
import { EnglishComponent } from './club/english/english.component';
import { RotaractComponent } from './club/rotaract/rotaract.component';
import { WdcComponent } from './club/wdc/wdc.component';
import { MusicComponent } from './club/music/music.component';
import { SdcComponent } from './club/sdc/sdc.component';
import { PhotoComponent } from './club/photo/photo.component';
import { AadcComponent } from './club/aadc/aadc.component';
import { MathsComponent } from './club/maths/maths.component';
import { CulturalComponent } from './club/cultural/cultural.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'club',component:ClubComponent},
  {path:'contact',component:ContactComponent},
  {path:'club/nss',component:NssComponent},
  {path:'club/tamil',component:TamilComponent},
  {path:'club/english',component:EnglishComponent},
  {path:'club/gender',component:GenderComponent},
  {path:'club/rotaract',component:RotaractComponent},
  {path:'club/wdc',component:WdcComponent},
  {path:'club/music',component:MusicComponent},
  {path:'club/sdc',component:SdcComponent},
  {path:'club/photo',component:PhotoComponent},
  {path:'club/aadc',component:AadcComponent},
  {path:'club/maths',component:MathsComponent},
  {path:'club/cultural',component:CulturalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

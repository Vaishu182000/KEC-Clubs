import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  AADC:string="assets/images/club/AADC.png"
  Cultural:string="assets/images/club/Cultural.png"
  English:string="assets/images/club/English.png"
  Gender:string="assets/images/club/Gender.png"
  Maths:string="assets/images/club/Maths.png"
  Music:string="assets/images/club/Music.png"
  Nss:string="assets/images/club/Nss.png"
  Photo:string="assets/images/club/photo.png"
  Rotaract:string="assets/images/club/Rotaract.png"
  SDC:string="assets/images/club/SDC.png"
  Tamil:string="assets/images/club/Tamil.png"
  WDC:string="assets/images/club/WDC.png"
  constructor() { }

  ngOnInit(): void {
  }

}

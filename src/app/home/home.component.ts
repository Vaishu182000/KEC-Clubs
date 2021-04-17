import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo:string="assets/images/Tamil/tamillogo.jpg"
  event1:string="assets/images/Tamil/event1.jpg"
  event2:string="assets/images/Tamil/event2.jpg"
  event3:string="assets/images/Tamil/event3.jpg"
  event4:string="assets/images/Tamil/event4.jpg"
  event5:string="assets/images/Tamil/event5.jpg"
  event6:string="assets/images/Tamil/event6.jpg"
  event7:string="assets/images/Tamil/event7.jpg"
  event8:string="assets/images/Tamil/event8.jpg"
  fac1:string="assets/images/Tamil/fac1.jpg"
  fac2:string="assets/images/Tamil/fac2.jpg"
  fac3:string="assets/images/Tamil/fac1.jpg"
  images=[this.event3,this.event1,this.event2];
  constructor() { }

  ngOnInit(): void {
  }

}

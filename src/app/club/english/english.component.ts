import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EnglishComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
   open(content) {
    this.modalService.open(content,{ centered: true });
  }
  fac1:string="assets/images/English/fac1.jpg"
  fac2:string="assets/images/English/fac2.jpg"
  fac3:string="assets/images/English/fac3.jpg"
  event1:string="assets/images/English/Inagural.jpg"
  event2:string="assets/images/English/Guest Lecture.jpg"
  event3:string="assets/images/English/Workshop.jpg"
  event4:string="assets/images/English/Enfesta.jpg"
  event5:string="assets/images/English/Dalliance.jpg"
  event6:string="assets/images/English/Klinker.jpg"
  event7:string="assets/images/English/Talent show.jpg"
  event8:string="assets/images/English/valedictory.jpg"
  ngOnInit(): void {
  }

}

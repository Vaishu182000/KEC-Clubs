import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TamilComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
   open(content) {
    this.modalService.open(content,{ centered: true });
  }
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
  fac3:string="assets/images/Tamil/fac3.jpg"
  ngOnInit(): void {
  }

}

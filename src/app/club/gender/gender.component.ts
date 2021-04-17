import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class GenderComponent implements OnInit {
  fac1:string="assets/images/Gender/fac1.jpg"
  fac2:string="assets/images/Gender/fac2.jpg"
  event1:string="assets/images/Gender/Inaugral.jpg"
  event2:string="assets/images/Gender/Mens day.jpg"
  event3:string="assets/images/Gender/Rudhra.jpg"
  event4:string="assets/images/Gender/Rudhra2.jpg"
  event5:string="assets/images/Gender/Constitution.jpg"
  event6:string="assets/images/Gender/Student.jpg"
  event7:string="assets/images/Gender/Rudhra2.jpg"
  event8:string="assets/images/Gender/valedictory.jpg"
  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content,{ centered: true });
  }
  ngOnInit(): void {
  }

}

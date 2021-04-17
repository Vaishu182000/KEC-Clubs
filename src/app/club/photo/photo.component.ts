import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PhotoComponent implements OnInit {
  fac1:string="assets/images/Photo/fac1.jpg"
  fac2:string="assets/images/Photo/fac2.jpg"
  fac3:string="assets/images/Photo/fac3.jpg"
  event1:string="assets/images/Photo/Inagural.jpg"
  event2:string="assets/images/Photo/extra.jpg"
  event3:string="assets/images/Photo/Workshop.jpg"
  event4:string="assets/images/Photo/Photographers.jpg"
  event5:string="assets/images/Photo/Scintilla.jpg"
  event6:string="assets/images/Photo/Picturesqure.jpg"
  event7:string="assets/images/Photo/Valedictory.jpg"
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

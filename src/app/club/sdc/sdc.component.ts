import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sdc',
  templateUrl: './sdc.component.html',
  styleUrls: ['./sdc.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SdcComponent implements OnInit {
  fac1:string="assets/images/Sdc/fac1.jpg"
  fac2:string="assets/images/Sdc/fac2.jpg"
  event1:string="assets/images/Sdc/Inaugral.jpg"
  event2:string="assets/images/Sdc/Talk.jpg"
  event3:string="assets/images/Sdc/extra.jpg"
  event4:string="assets/images/Sdc/workshop.jpg"
  event5:string="assets/images/Sdc/motivational.jpg"
  event6:string="assets/images/Sdc/skills&thrills.jpg"
  event7:string="assets/images/Sdc/voiceofkec.jpg"
  event8:string="assets/images/Sdc/valedictory.jpg"
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

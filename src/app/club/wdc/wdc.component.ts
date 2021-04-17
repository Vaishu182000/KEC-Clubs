import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-wdc',
  templateUrl: './wdc.component.html',
  styleUrls: ['./wdc.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class WdcComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
   open(content) {
    this.modalService.open(content,{ centered: true });
  }
  fac1:string="assets/images/Wdc/fac1.jpg"
  fac2:string="assets/images/Wdc/fac2.jpg"
  event1:string="assets/images/Wdc/inaugral.jpg"
  event2:string="assets/images/Wdc/GL.jpg"
  event3:string="assets/images/Wdc/Ardra.jpg"
  event4:string="assets/images/Wdc/Workshop.jpg"
  event5:string="assets/images/Wdc/Collage.jpg"
  event6:string="assets/images/Wdc/Mehandi.jpg"
  event7:string="assets/images/Wdc/Rangoli.jpg"
  event8:string="assets/images/Wdc/Valedictory.jpg"
  ngOnInit(): void {
  }

}

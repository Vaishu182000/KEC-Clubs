import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-aadc',
  templateUrl: './aadc.component.html',
  styleUrls: ['./aadc.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AadcComponent implements OnInit {
  fac1:string="assets/images/AADC/fac1.jpg"
  fac2:string="assets/images/AADC/fac2.jpg"
  fac3:string="assets/images/AADC/fac3.jpg"
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

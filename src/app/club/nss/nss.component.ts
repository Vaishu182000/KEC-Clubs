import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nss',
  templateUrl: './nss.component.html',
  styleUrls: ['./nss.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NssComponent implements OnInit {
  logo:string="assets/images/Nss/nsslogo.jpg"
  fac1:string="assets/images/Nss/nssfac1.jpg"
  fac2:string="assets/images/Nss/nssfac2.jpg"
  fac3:string="assets/images/Nss/nssfac3.jpg"
  fac4:string="assets/images/Nss/nssfac4.jpg"
  event1:string="assets/images/Nss/nssevent1.jpg"
  event2:string="assets/images/Nss/nssevent2.jpg"
  event3:string="assets/images/Nss/nssevent3.jpg"
  event4:string="assets/images/Nss/nssevent4.jpg"
  event5:string="assets/images/Nss/nssevent5.jpg"
  event6:string="assets/images/Nss/nssevent6.jpg"
  event7:string="assets/images/Nss/nssevent7.jpg"
  event8:string="assets/images/Nss/nssevent8.jpg"

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

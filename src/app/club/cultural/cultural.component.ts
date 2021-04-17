import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CulturalComponent implements OnInit {
  fac1:string="assets/images/Cultural/fac1.jpg"
  fac2:string="assets/images/Cultural/fac2.jpg"
  fac3:string="assets/images/Cultural/fac3.jpg"
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

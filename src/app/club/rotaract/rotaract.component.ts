import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-rotaract',
  templateUrl: './rotaract.component.html',
  styleUrls: ['./rotaract.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class RotaractComponent implements OnInit {
  fac1:string="assets/images/Rotaract/fac1.jpg"
  fac2:string="assets/images/Rotaract/fac2.jpg"
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

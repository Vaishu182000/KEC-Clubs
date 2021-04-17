import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MathsComponent implements OnInit {
  fac1:string="assets/images/Maths/fac1.jpg"
  fac2:string="assets/images/Maths/fac2.jpg"
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

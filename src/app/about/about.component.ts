import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  about1:string="assets/images/aboutkec.jpg"
  about2:string="assets/images/aboutkec1.jpg"
  ngOnInit(): void {
  }

}

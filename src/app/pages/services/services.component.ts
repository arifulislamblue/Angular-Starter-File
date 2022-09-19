import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Project List
   */
   projectList:any[] =[
    {
      _id:"1",
      projectImage:"./assets/images/temp/18048936_04.png",
      routerLink:"#",
      projectName:"Business Card"
    },
    {
      _id:"2",
      projectImage:"./assets/images/temp/17805549_5896451.png",
      routerLink:"#",
      projectName:"Brochure"
    },
    {
      _id:"3",
      projectImage:"./assets/images/temp/mokcup-1.png",
      routerLink:"#",
      projectName:"Company Pad"
    },
    {
      _id:"4",
      projectImage:"./assets/images/temp/Mockup-1.png",
      routerLink:"#",
      projectName:"Identity Card"
    },
    {
      _id:"5",
      projectImage:"./assets/images/temp/Perfume-3d-Packaign-Design-2-Main.png",
      routerLink:"#",
      projectName:"Product Packaging"
    },
    {
      _id:"6",
      projectImage:"./assets/images/temp/18048936_04.png",
      routerLink:"#",
      projectName:"Company Lanyard"
    },
  ]

}

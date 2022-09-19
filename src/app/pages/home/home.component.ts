import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private carousel:CarouselCntrlService
  ) { }

  ngOnInit(): void {
 
  }
  /***
   * scroll Bottom
   */
  scrollBottom(el:any){
    el.scrollIntoView({ behavior:'smooth'});
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
  /***
   * Brand Logo Data
   */
  brandLogo:any[] =[
    {
      _id:"1",
      brandImage:"./assets/images/brand/aPay.svg",
      routerLink:"#",
    },
    {
      _id:"2",
      brandImage:"./assets/images/brand/Group 9.svg",
      routerLink:"#",
    },
    {
      _id:"3",
      brandImage:"./assets/images/brand/Group 12.svg",
      routerLink:"#",
    },
    {
      _id:"4",
      brandImage:"./assets/images/brand/Group 393.svg",
      routerLink:"#",
    },
    {
      _id:"5",
      brandImage:"./assets/images/brand/Group 396.svg",
      routerLink:"#",
    },
    {
      _id:"6",
      brandImage:"./assets/images/brand/Group 12.svg",
      routerLink:"#",
    },
  ]

}

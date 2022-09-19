import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slide = false;
  searchBar = false;


  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
      
  }
  
  /**** search bar to menu controll */
  searchBoxShow(){
    this.searchBar =true;
    if(window.innerWidth <= 600){
      this.slide =! this.slide;
      this.searchBar = false;
    }else{
      this.slide = false;
      this.searchBar = true;
    }
  }
  searchBoxHide(){
    this.searchBar = false;
  }
  /**
   * Slide Controll
   */
  slideToggle(){
    this.slide =! this.slide;
    console.log(this.slide);
  }
  




}

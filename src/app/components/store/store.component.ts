import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToMercedes(category:string){
    this.router.navigate(["car/"+category])
  }
  goToAudi(category:string){
    this.router.navigate(["car/"+category])
  }
  goToFord(category:string){
    this.router.navigate(["car/"+category])
  }
  goToPeugeot(category:string){
    this.router.navigate(["car/"+category])
  }
  goToBmw(category:string){
    this.router.navigate(["car/"+category])
  }
  goToPorsche(category:string){
    this.router.navigate(["car/"+category])
  }
  goToLandRover(category:string){
    this.router.navigate(["car/"+category])
  }
  goToToyota(category:string){
    this.router.navigate(["car/"+category])
  }

}

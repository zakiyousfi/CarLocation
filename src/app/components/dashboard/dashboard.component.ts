import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  T = JSON.parse(localStorage.getItem("reservations") || "[]")
  id:any;
  ReservationsTab:any=[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    for (let i = 0; i < this.T.length; i++) {
     if (this.T[i].userId==this.id) {
      this.ReservationsTab.push(this.T[i])
     }
      
    }
  }
  delet(id:any){
    for (let i = 0; i < this.T.length; i++) {
      if (this.T[i].id  == id) {
        this.T.splice(i,1) 
        for (let j = 0; j < this.ReservationsTab.length; j++) {
          if (this.ReservationsTab[j].id  == id) {
            this.ReservationsTab.splice(j,1) 
            ///////////////////
          }  
        }
      }  
    }

    localStorage.setItem("reservations",JSON.stringify(this.T))

}
facture(id:any){
  this.router.navigate(["facture/"+id])
}
}

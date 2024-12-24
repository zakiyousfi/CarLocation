import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  termName: any;
  category:any;
  T:any=[{id:1,img:"../../assets/images/car/1.jpg",Category:"Mercedes",name:"EB ELEKTRO",prix:170,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:2,img:"../../assets/images/car/2.jpg",Category:"Mercedes",name:"EQB",prix:100,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:3,img:"../../assets/images/car/3.jpg",Category:"Mercedes",name:"GLA",prix:90,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:4,img:"../../assets/images/car/4.jpg",Category:"Mercedes",name:"GLE",prix:190,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:5,img:"../../assets/images/car/5.jpg",Category:"Mercedes",name:"GLS",prix:200,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:6,img:"../../assets/images/car/6.jpg",Category:"Land rover",name:"defender",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:7,img:"../../assets/images/car/7.jpg",Category:"Land rover",name:"electrique pour enfant 2 place",prix:30,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:8,img:"../../assets/images/car/8.jpg",Category:"Land rover",name:"freelander",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:9,img:"../../assets/images/car/9.jpg",Category:"Land rover",name:"RANGE ROVER EVOQUE",prix:200,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:10,img:"../../assets/images/car/10.png",Category:"Land rover",name:"range rover velar",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:11,img:"../../assets/images/car/11.jpg",Category:"Land rover",name:"land rover sport",prix:130,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:12,img:"../../assets/images/car/12.jpg",Category:"peugeot",name:"peugeot 108",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:13,img:"../../assets/images/car/13.jpg",Category:"peugeot",name:"peugeot 208",prix:200,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:14,img:"../../assets/images/car/14.jpg",Category:"peugeot",name:"peugeot 308",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:15,img:"../../assets/images/car/15.png",Category:"peugeot",name:"peugeot 3008",prix:130,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:16,img:"../../assets/images/car/16.png",Category:"peugeot",name:"peugeot 5008 GT",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:17,img:"../../assets/images/car/17.jpg",Category:"porsche",name:"panamera",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:18,img:"../../assets/images/car/18.jpg",Category:"porsche",name:"cayenne rouge",prix:160,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:19,img:"../../assets/images/car/19.jpg",Category:"porsche",name:"cayenne",prix:190,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:20,img:"../../assets/images/car/20.jpg",Category:"porsche",name:"taycan 4s",prix:90,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:21,img:"../../assets/images/car/21.jpg",Category:"porsche",name:"taycan ross turismo4",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:22,img:"../../assets/images/car/22.jpg",Category:"porsche",name:"taycan",prix:300,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:23,img:"../../assets/images/car/23.png",Category:"BMW",name:"serie1",prix:320,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:24,img:"../../assets/images/car/24.png",Category:"BMW",name:"serie2",prix:500,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:25,img:"../../assets/images/car/25.jpg",Category:"BMW",name:"serie3",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:26,img:"../../assets/images/car/26.jpg",Category:"BMW",name:"serie4",prix:180,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:27,img:"../../assets/images/car/27.jpg",Category:"toyota",name:"auris HD",prix:130,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:28,img:"../../assets/images/car/28.jpg",Category:"toyota",name:"auris hybride",prix:190,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:29,img:"../../assets/images/car/29.jpg",Category:"toyota",name:"aygo",prix:180,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:30,img:"../../assets/images/car/30.jpg",Category:"toyota",name:"c-hr hybride",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:31,img:"../../assets/images/car/31.jpg",Category:"toyota",name:"corolla-sedan",prix:170,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:32,img:"../../assets/images/car/32.jpg",Category:"toyota",name:"highlander 7 places",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:33,img:"../../assets/images/car/33.jpg",Category:"toyota",name:"toyota Rav",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:34,img:"../../assets/images/car/34.png",Category:"toyota",name:"toyota rav 4 hybride",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:35,img:"../../assets/images/car/35.jpg",Category:"toyota",name:"toyota-yaris",prix:210,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:36,img:"../../assets/images/car/36.jpg",Category:"toyota",name:"yaris rouge",prix:120,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:37,img:"../../assets/images/car/37.jpg",Category:"audi",name:"audi a2",prix:130,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:38,img:"../../assets/images/car/38.jpg",Category:"audi",name:"audi a3",prix:180,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:39,img:"../../assets/images/car/39.jpg",Category:"audi",name:"audi a4",prix:250,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:40,img:"../../assets/images/car/40.jpg",Category:"audi",name:"audi a4 noire",prix:300,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:41,img:"../../assets/images/car/42.jpg",Category:"ford",name:"capri",prix:200,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:42,img:"../../assets/images/car/43.jpg",Category:"ford",name:"fiesta",prix:100,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:43,img:"../../assets/images/car/44.jpg",Category:"ford",name:"focus",prix:400,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:44,img:"../../assets/images/car/45.jpg",Category:"ford",name:"kuga",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:45,img:"../../assets/images/car/46.jpg",Category:"ford",name:"mustang",prix:170,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  ]
  c:any=[];
  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.category=this.activatedRoute.snapshot.paramMap.get("category")
    for (let i = 0; i < this.T.length; i++) {
      if (this.T[i].Category==this.category) {
        this.c.push(this.T[i])
      }
    }

  }

}

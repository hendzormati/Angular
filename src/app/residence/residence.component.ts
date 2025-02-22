import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  num!:any;
  constructor(private resService:ResidenceService){
  }
  listResidences:Residence[]=[];
  ngOnInit(): void {
    this.resService.getallresidence().subscribe((data)=> {this.listResidences = data});
  }
  shownumber(){
    this.num=this.resService.getSameValueOf(this.listResidences,"id","1");
  }
  listResidencesOLD:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/img.png", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/img.png", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/img.png", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/img.png", status: "En Construction"}
    ];
    favoris:Residence[]=[];
    res = new Residence();
    state=true;
    searchText ="";
    clicked = false;
    deleted = false;
   showlocation(address:string)
   {
    // alert is the pop up
    if (address.toLowerCase().match("inconnu"))
      alert('⚠️ Error: l’adresse de cette résidence est  inconnue !');
    else alert('adresse : '+address);
   }
   list()
   {
    return this.listResidences.filter((value) => value.name.toLowerCase().includes(this.searchText.toLowerCase()));
   }
   deleteOLD(resdel:Residence)
   {
    this.listResidences.splice(this.listResidences.findIndex((value) => value === resdel),1);
    this.res =resdel;
    this.clicked = true;
    this.deleted = true;
    this.searchText ="";
   }
   delete(resdel:Residence)
   {
    this.resService.deleteres(resdel.id).subscribe(()=>{console.log("deleted")});
    this.ngOnInit();
   }
   getresidence(residence:Residence)
   {
    this.res=residence;
    this.clicked = true;
   }
   isclicked(id:number)
   {
    return this.favoris.some((value) => value.id === id);
   }
   favoritelist()
   { 
    let id = this.favoris.findIndex((value) => value.name === this.res.name);
    console.log('id ',id,'length ',this.favoris.length,' res id ',this.res.id)
    if(this.clicked)
    {
      if(id === -1 && !this.deleted )
        this.favoris.push(this.res);
      else 
        if(id != -1)  
          this.favoris.splice(id,1);
    this.deleted=false;
    this.clicked = false;
    }
    return this.favoris;
   }

     }




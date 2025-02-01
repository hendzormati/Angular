import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';
@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/img.png", status: "Disponible",liked:false},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/img.png", status:
    "Disponible" ,liked:false},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/img.png", status:
    "Vendu",liked:false},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/img.png", status: "En Construction",liked:false}
    ];
    favoris:Residence[]=[];
   showlocation(address:string)
   {
    // alert is the pop up
    if (address.toLowerCase().match("inconnu"))
      alert('⚠️ Error: l’adresse de cette résidence est  inconnue !');
    else alert('adresse : '+address);
   }
   res = new Residence();
   state=true;
   getres(residence:Residence)
   {
    this.res=residence;
    this.res.liked=!this.res.liked;
   }
   searchText ="";
   list()
   {
    let l=this.listResidences.filter((value) => value.name.toLowerCase().includes(this.searchText.toLowerCase()));
    //console.log(' search ',this.searchText , l.length);
    return l;
   }
   favlist()
   { 
    let id = this.favoris.findIndex((value) => value.name === this.res.name);
    //console.log('id ',id,'length ',this.favoris.length,' res id ',this.res.id)
    if(id === -1 && this.res.id!=null &&this.res.liked)
      this.favoris.push(this.res);
    else if (id >-1 && !this.res.liked) this.favoris.splice(id,1);
    return this.favoris;
   }
     }




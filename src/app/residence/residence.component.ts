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
   showlocation(address:string)
   {
    // alert is the pop up
    if (address.toLowerCase().match("inconnu"))
      alert('⚠️ Error: l’adresse de cette résidence est  inconnue !');
    else alert('adresse : '+address);
   }
     }




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor( private http:HttpClient) { }

  getSameValueOf(list: any[], critiria: any, value: any){
   let nb=0;
   for(let i=0;i<list.length;i++)
   {
    if(list[i][critiria]==value)nb++;
   }
   return nb;
  }
  getallresidence():Observable<Residence[]>
  {
    return this.http.get<Residence[]>("http://localhost:3000/residence");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  url="http://localhost:3000/residence";
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
    return this.http.get<Residence[]>(this.url);
  }
  addres(res : Residence)
  {
    return this.http.post<Residence[]>(this.url,res);
  }
  deleteres(id:any)
  {
    return this.http.delete<Residence[]>(this.url+"/"+id);
  }
  updateres(res:Residence,id:any)
  {
    return this.http.put<Residence[]>(this.url+"/"+id,res);
  }
  showres(id:any)
  {
    return this.http.get<Residence[]>(this.url+"/"+id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent implements OnInit{
  id !:number;
  residence = new Residence();
constructor(private active:ActivatedRoute,private service:ResidenceService){}
  ngOnInit(): void {
   this.id=this.active.snapshot.params["id"];
  this.service.showres(this.id).subscribe((val)=>this.residence=val);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence-update',
  templateUrl: './residence-update.component.html',
  styleUrls: ['./residence-update.component.css']
})
export class ResidenceUpdateComponent implements OnInit{
   formR!:FormGroup;
   constructor(private service:ResidenceService, private router:Router,private active:ActivatedRoute){}
   id!:number;
 ngOnInit(): void {
  this.id=this.active.snapshot.params["id"];
  this.formR= new FormGroup({
    id:new FormControl('',[Validators.required,Validators.minLength(2)]),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    image:new FormControl('',Validators.required),
    status:new FormControl('',[Validators.required,Validators.pattern(/^disponnible$/)]),
  });
  this.service.showres(this.id).subscribe((val)=>{
    this.formR.patchValue(val)
  });
  

}
get status(){ return this.formR.get('status');}
update()
{
  this.service.updateres(this.formR.value,this.id).subscribe(()=>
  this.router.navigate(["/residence"])
  );

  
  
}
}

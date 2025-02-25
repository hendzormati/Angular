import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit {

 formR!:FormGroup;
 ngOnInit(): void {
  this.formR= new FormGroup({
    id:new FormControl('',[Validators.required,Validators.minLength(2)]),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    image:new FormControl('',Validators.required),
    status:new FormControl('',[Validators.required,Validators.pattern(/^disponnible$/)]),
  });
}
get status(){ return this.formR.get('status');}
add()
{
  console.log("input", JSON.stringify(this.formR.value));

  
  
}
}

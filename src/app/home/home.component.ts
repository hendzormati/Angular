import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
name="hend"; //interpolation
text="";
status=true;
i =0;
// event biding
add(){this.i++; this.text=" clicked "+this.i;}
remove(){this.i--;this.text=" clicked "+this.i;}
}
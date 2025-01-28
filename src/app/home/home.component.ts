import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
name="my home"; //interpolation
status=true;
i =0;
// event biding
add(){this.i++;console.log("salut"); this.name=" clicked "+this.i;}
remove(){this.i--;console.log("salut"); this.name=" clicked "+this.i;}

}

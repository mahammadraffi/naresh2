import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  angularway(x){
console.log(x)
  }


  submit(x){
    console.log(x.value);
  }//form submit

  ngOnInit() {
  }

}

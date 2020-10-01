import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerTitle:string="register" //logic
  constructor() { }
  angularway(x){
    console.log(x)
      }
      submit(x){
        console.log(x.value);
      }

  ngOnInit() {
    var country =document.querySelectorAll("#country option");
    var c=country.forEach(c=>{
  
    })
  }

}

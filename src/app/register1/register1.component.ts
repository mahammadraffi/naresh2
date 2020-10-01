import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  constructor() { }

form =new FormGroup({
  username:new FormControl("",[Validators.required])
})
get username(){
  return this.form.get("username")
}





  ngOnInit() {
  }

}

import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employeeData=[
  {
    emp_name:"raffi",
    emp_age:23,
    emp_company:"testyantra",
    emp_salary:20000,
    emp_designation:"web developer",
    emp_doj:new Date("2016 06 21"),
    emp_gender:"male",
    emp_loc:"mandya",
    emp_edu:"B.tech",
    emp_edu_percentage:68

  },
  {
    emp_name:"prashanth",
    emp_age:22,
    emp_company:"CGI",
    emp_salary:2000000,
    emp_designation:"full stack developer",
    emp_doj:new Date("2019 11 21"),
    emp_gender:"male",
    emp_loc:"bangloure",
    emp_edu:"B.tech",
    emp_edu_percentage:65
  },
  {
    emp_name:"raju",
    emp_age:22,
    emp_company:"google",
    emp_salary:20000,
    emp_designation:"web-developer",
    emp_doj:new Date("2019 12 25"),
    emp_gender:"male",
    emp_loc:"hyderabad",
    emp_edu:"B.tech",
    emp_edu_percentage:75
  },
  {
    emp_name:"naresh",
    emp_age:22,
    emp_company:"testyantra",
    emp_salary:15000,
    emp_designation:"java developer",
    emp_doj:new Date("2019 10 25"),
    emp_gender:"male",
    emp_loc:"bangloure",
    emp_edu:"B.tech",
    emp_edu_percentage:68
  },
   {
    emp_name:"ramu",
    emp_age:22,
    emp_company:"testyantra",
    emp_salary:15000,
    emp_designation:"java developer",
    emp_doj:new Date("2019 10 25"),
    emp_gender:"male",
    emp_loc:"bangloure",
    emp_edu:"B.tech",
    emp_edu_percentage:68
  }

]
  constructor() { }

  ngOnInit() {
  }

}

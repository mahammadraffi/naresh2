import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[
  {
  name:"raffi",
  age:23,
  company:"google",
  salary:100000,
  designation:"full-stack developer",
  doj:new Date('1/1/2020'),
  location:"bangloure",
  education:'B.tech',
  stream:'eee'
  },
  {
    name:"raffi",
    age:23,
    company:"google",
    salary:100000,
    designation:"full-stack developer",
    doj:new Date('1/1/2020'),
    location:"bangloure",
    education:'B.tech',
    stream:'eee'
    },
    {
      name:"raffi",
      age:23,
      company:"google",
      salary:100000,
      designation:"full-stack developer",
      doj:new Date('1/1/2020'),
      location:"bangloure",
      education:'B.tech',
      stream:'eee'
      },
      {
        name:"raffi",
        age:23,
        company:"google",
        salary:100000,
        designation:"full-stack developer",
        doj:new Date('1/1/2020'),
        location:"bangloure",
        education:'B.tech',
        stream:'eee'
        },
        {
          name:"raffi",
          age:23,
          company:"google",
          salary:100000,
          designation:"full-stack developer",
          doj:new Date('1/1/2020'),
          location:"bangloure",
          education:'B.tech',
          stream:'eee'
          },
            {
  name:"raffi",
  age:23,
  company:"google",
  salary:100000,
  designation:"full-stack developer",
  doj:new Date('1/1/2020'),
  location:"bangloure",
  education:'B.tech',
  stream:'eee'
  }, 
   {
    name:"raffi",
    age:23,
    company:"google",
    salary:100000,
    designation:"full-stack developer",
    doj:new Date('1/1/2020'),
    location:"bangloure",
    education:'B.tech',
    stream:'eee'
    }
];
// userprofile='https://cdn.pixabay.com/photo/2018/10/26/17/28/yellow-billed-hornbill-3774974__480.jpg'
// isActive=true;//class binding
// colspan=4;//attribute binding
// color=true;//style binding
// clickEvent(event){
//   console.log(event);
//   alert('hello');
// }
// keyupEvent(event){
//   if(event.keyCode ==13){
//   console.log(event.target.value);
//   }//this is js way
// }

// angularwaykeyupEvent(event){
//   console.log(event.target.value);
// }
// //getting value through angular way
// enterEmail(x){
//   console.log('my email is',x);
// }
  constructor() { }

  ngOnInit() {
  }

}

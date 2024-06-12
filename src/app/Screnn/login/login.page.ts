import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';

import { doc } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl:'./login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email!: string;
  password!: string;
  name!: string;

  constructor(private userService: UserService ,private router: Router) { }
  ngOnInit() {
  }
 login(){

    if(this.email && this.password ){

      console.log(this.email);
      console.log(this.password);
      this.userService.login(this.email,this.password).then((res)=>{
        console.log(res);
        alert("login successful")
        this.router.navigate(['/dashboard']);
        
      }).catch((err)=>{
        console.log(err);
        alert("login failed")
      })
    }
  }

 
}
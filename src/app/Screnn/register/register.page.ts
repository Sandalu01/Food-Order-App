import { Component, OnInit } from '@angular/core';
import { exhaustAll } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email!:string;
  password!:string;
  fullname!:string;

  //user service pass into consructor register

  constructor(private userservice:UserService) { } 

  ngOnInit() {
    
  }

  Create(){
    if(this.email && this.password && this.fullname){
      
      console.log(this.email);
      console.log(this.password);
      console.log(this.fullname);

      this.userservice.Register(this.email,this.password).then(registerdata=>{
        this.userservice.createuser(this.email,this.fullname).then(userdata=>{
          console.log(userdata);
        }).catch(error=>{
          console.log(error);
          alert("ransom 22")
        })
      })  .catch(error=>{
        console.log(error);
        alert("ransom 33 ")
      })

    }
    else{
      alert("Try Again") 
    }

  }


}

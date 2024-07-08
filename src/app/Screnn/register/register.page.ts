import { Component, OnInit } from '@angular/core';
import { exhaustAll } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
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

  constructor(private userservice:UserService,private route:Router) { } 

  ngOnInit() {
    
  }

  Create(){
    if(this.email && this.password && this.fullname){
      
      console.log(this.email);
      console.log(this.password);
      console.log(this.fullname);

      this.userservice.Register(this.email,this.password).then(registerdata=>{
        this.userservice.createuser(this.email,this.fullname).then(createdata=>{
          console.log(createdata);
          alert("registered successfully");
          this.route.navigateByUrl("/dashboard");

        }).catch(error=>{
          console.log(error);
          alert("can't stored user in database");
          
        })
      }).catch(error=>{
        console.log(error);
        alert("registered unsuccessfully");
      })

    }
    else{
    alert("Please enter both email and password");

  }
}

}


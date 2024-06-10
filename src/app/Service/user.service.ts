import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

//data-base
export class UserService {

  constructor(private firestore: AngularFirestore, private firebaseauth: AngularFireAuth) { }

  Register(email:string,password:string):Promise<any> {
    return this.firebaseauth.createUserWithEmailAndPassword(
      email,password)
  }


  // Login(email:string,password:string):Promise<any> {
  //   return this.firebaseauth.signInWithEmailAndPassword(
  //     email,password)
  // }

  //save the data in the firestore

  createuser(email:string,name:string):Promise<any> {
    return this.firestore.collection('users').add({
      email:email,
      name:name,
    })

    
  }
}

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private storage:AngularFireStorage ,private firestore: AngularFirestore) { }
  uploadfile(data:any):Promise<string>{
    const filepath = `product/${Math.floor(Math.random()+101)}_${data.name}`
    const fileRef = this.storage.ref(filepath);
    
    const task = this.storage.upload(filepath,data);
    return new Promise((resolve, reject) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(
            url => resolve(url),
            (error: any) => reject(error)  
          );
        })
      ).subscribe();
    });
 
}

//upload the file in to the storage (productname,description,url and image files)
craateproduct(Object:any){
  return this.firestore.collection('product').add(Object);
}

// get the all data that has been downloaded fro the firebase store

LoadAlldata(): Observable<DocumentChangeAction <any>[]>{
 return this.firestore.collection('product').snapshotChanges();
}

}

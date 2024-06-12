import { Component, OnInit } from '@angular/core';
import { ProductService } from'src/app/Service/product.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  // reference types file
  selectedefile:File |null =null;
  downloadURL: string | null = null;
  // selectedefile!:File
  productName!: string;
  productCost!: string;
  productDescription!: string;
   
  constructor(private productservice:ProductService) { }

  ngOnInit() {
  }
  selectfile(event:any) {
    this.selectedefile = event.target.files[0];
    console.log(this.selectedefile);

  }
  upload(){
    if(!this.selectedefile){
      alert("please select a file")
      return;
    } 

    if(!this.productCost&&!this.productCost&&!this.productCost){
      console.log("something went wrong");
      alert("something went wrong")
      return;
    }


    this.productservice.uploadfile(this.selectedefile).then((url)=>{
      this.downloadURL = url;
      //save the file on fire based
      console.log(this.downloadURL);

      // const data = JSON.parse(this.downloadURL);
      const data = {
       name:this.productName,
       cost:this.productCost,
       description:this.productDescription,
       image:this.downloadURL

      }
      this.productservice.craateproduct(data).then(saveresponse=>(
      )=>{
        alert("product added");
        console.log("product added");
        console.log(saveresponse)
       
        

        // this.productservice.craateproduct(this.productName,this.productCost,this.productDescription,this.downloadURL).then(()=>{
        //   console.log("product added");
        // }).catch((error)=>{
        //   console.log(error);
        // });



      }).catch((error)=>{
        console.log(error);
      });
  

    }).catch((error)=>{
      console.log(error);
    });
  }
}

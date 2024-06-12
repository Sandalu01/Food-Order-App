import { Component, OnInit } from '@angular/core';
import { ProductService } from'src/app/Service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any[] = [];

  constructor(private productservice:ProductService) { }

  ngOnInit() {

    this.LoadAlldata();
  }

  LoadAlldata(){
   this.productservice.LoadAlldata().subscribe(data => {
     console.log(data);

     // Id generation
     this.products=data.map(product =>(
       {
         id:product.payload.doc.id,
        ...product.payload.doc.data()
       }
     ))
     
   }, err => {
    console.log(err);
   });
  }

  
}

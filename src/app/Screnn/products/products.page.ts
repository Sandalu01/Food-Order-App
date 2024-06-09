import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    {
      title: 'Product 1',
      subtitle: 'Subtitle 1',
      description: 'Description for product 1',
      imageUrl: 'assets/img/product1.jpg'
    },
    {
      title: 'Product 2',
      subtitle: 'Subtitle 2',
      description: 'Description for product 2',
      imageUrl: 'assets/img/product2.jpg'
    },
    // Add more products as needed
  ];

  

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  popularDishes = [
    { name: 'Pizza', description: 'Delicious cheese pizza', image: 'assets/images/pizza.jpg' },
    { name: 'Burger', description: 'Juicy beef burger', image: 'assets/images/burger.jpg' },
    // more dishes...
  ];

  newArrivals = [
    { name: 'Pasta', description: 'Creamy Alfredo pasta', image: 'assets/images/pasta.jpg' },
    { name: 'Sushi', description: 'Fresh sushi rolls', image: 'assets/images/sushi.jpg' },
    // more dishes...
  ];

  specialOffers = [
    { name: 'Tacos', description: 'Spicy chicken tacos', image: 'assets/images/tacos.jpg' },
    { name: 'Salad', description: 'Healthy green salad', image: 'assets/images/salad.jpg' },
    // more offers...
  ];

  constructor() { }

  ngOnInit() {
  }

}

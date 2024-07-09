import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"loading",pathMatch:"full"},
  {path:"loading",loadChildren:()=>import("./Screnn/loading/loading.module").then(m=>m.LoadingPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./Screnn/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Screnn/register/register.module').then( m => m.RegisterPageModule)
  },
  {
     path: 'dashboard',
    loadChildren: () => import('./Screnn/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./Screnn/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./Screnn/foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./Screnn/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./Screnn/new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Screnn/contact/contact.module').then( m => m.ContactPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

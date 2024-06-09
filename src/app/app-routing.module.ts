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
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

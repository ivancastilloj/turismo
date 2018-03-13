import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewyorkComponent } from './newyork/newyork.component';
import { HongkongComponent } from './hongkong/hongkong.component';
import { FilipinasComponent } from './filipinas/filipinas.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'NewYork',
    component: NewyorkComponent,
    data: { title: 'NewYork' }
  },
  {
    path: 'HongKong',
    component: HongkongComponent,
    data: { title: 'HongKong' }
  },
  {
    path: 'Filipinas',
    component: FilipinasComponent,
    data: { title: 'Filipinas' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

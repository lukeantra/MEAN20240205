import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductGuard } from './services/product.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'product', component: ProductComponent },
  // {
  //   path: 'product/:productid/:productname',
  //   component: ProductDetailComponent,
  // },

  {
    path: 'product',
    // component: ProductComponent,
    children: [
      { path: '', component: ProductComponent }, // '/product/'
      { path: ':productid', component: ProductDetailComponent }, // '/product/:productid'
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

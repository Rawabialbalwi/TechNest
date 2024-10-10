import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
 
  {path : '' ,component:HomeComponent},
  {path : 'details/:id' ,component:DetailsComponent},
  {path : 'cart' ,component:CheckoutComponent},
  {path : 'invoice' ,component:InvoiceComponent},
  {path : 'payment' ,component:PaymentComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

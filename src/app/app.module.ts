import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './headre/headre.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ListComponent,
    CheckoutComponent,
    PaymentComponent,
    InvoiceComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

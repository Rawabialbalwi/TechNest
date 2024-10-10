import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'; 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userInfo: any = {}; 
  userDetails: any = {}; 
  cartItems: any[] = []; 
  totalAmount: number = 0; 

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    
    this.userInfo = history.state.userInfo || {};
    this.userDetails = this.userInfo; 
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalAmount();
  }

  private calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  submitPayment(): void {
    console.log("Payment submitted", this.userInfo, this.cartItems, this.totalAmount);
    
    this.router.navigate(['/invoice'], { state: { userInfo: this.userInfo } });
  }
}

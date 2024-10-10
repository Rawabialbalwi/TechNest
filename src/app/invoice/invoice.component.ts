import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'; 
import { reset } from '../state/counter/counter.actions';  
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  cartItems: any[] = [];
  userInfo: any = {};
  orderId!: string; 
  totalAmount: number = 0;
 

  currentDate: string = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  constructor(private cartService: CartService, private router: Router,  private store: Store ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.userInfo = history.state.userInfo || {};

    this.orderId = this.generateOrderId();
    
    this.calculateTotalAmount(); 
  }

  private generateOrderId(): string {
    return 'ORD-' + Math.floor(1000 + Math.random() * 9000).toString();
  }

  private calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }
  public confirmPayment(): void {
    Swal.fire({
      title: `Hello, ${this.userInfo.fullName}`,
      text: `Your total order amount is ${this.formatCurrency(this.totalAmount)}. Are you sure you want to proceed with the payment?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, confirm',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: `Your purchase has been successfully completed. Your Order ID is: ${this.orderId}`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Clear the cart
          this.cartService.clearCart();
  
          // Reset the cart count to 0
          this.store.dispatch(reset());
  
          // Redirect to the home page after pressing OK
          this.router.navigate(['/']);
        });
      }
    });
  }
  
}

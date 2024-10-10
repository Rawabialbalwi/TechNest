import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { Router } from '@angular/router'; // استيراد Router

interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = []; 

  constructor(private cartService: CartService, private router: Router) {} 
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); 
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  removeFromCart(productId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeFromCart(productId);
        this.cartItems = this.cartService.getCartItems(); 

        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        );
      }
    });
  }

  checkout(): void {
    this.router.navigate(['/payment']); 
  }
}

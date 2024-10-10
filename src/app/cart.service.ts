import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];

  addToCart(product: any, quantity: number) {
    if (quantity <= 0) {
      console.log(`Invalid quantity: ${quantity}. Product not added or updated.`);
      return;
    }

    const cartItem = this.cartItems.find(item => item.id === product.id);
    
    if (cartItem) {
      cartItem.quantity += quantity;

      // تحقق إذا أصبحت الكمية أقل من أو تساوي صفر
      if (cartItem.quantity <= 0) {
        this.removeFromCart(product.id);
        console.log(`Removed product from cart as quantity reached zero or below.`);
      } else {
        console.log(`Updated product quantity: ${cartItem.quantity}`);
      }
    } else {
      this.cartItems.push({ ...product, quantity });
      console.log(`Added new product with quantity: ${quantity}`);
    }
  }

  // إرجاع جميع العناصر الموجودة في السلة
  getCartItems() {
    return this.cartItems;
  }

  // إزالة منتج من السلة بناءً على معرف المنتج
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    console.log(`Removed product with ID: ${productId}`);
  }

  // التحقق مما إذا كان المنتج موجودًا في السلة
  isProductInCart(productId: number): boolean {
    return this.cartItems.some(item => item.id === productId);
  }

  // الحصول على كمية المنتج في السلة
  getProductQuantity(productId: number): number {
    const cartItem = this.cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  }
  // في cart.service.ts
public clearCart(): void {
  this.cartItems = []; 
  localStorage.removeItem('cartItems'); 
}

}

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  Toast: any;

  constructor(private router: Router) { }

  getToken() {
    if (localStorage.getItem('objectid') != null) {
      console.log('token ',localStorage.getItem('objectid') );
      return  localStorage.getItem('objectid') 
    }

   
  }

  getUserObject() {
    const user = JSON.parse(localStorage.getItem('objectid'));
    return user;
  }

  toast(messageType: any, message: any) {

    this.Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    this.Toast.fire({
      type: messageType,
      title: message
    });
  }
res = false;
   confirm(message){
   
     Swal.fire({
      title: 'Please confirm',
      text: message,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      console.log(result)
     return result.value;
    })
    return this.res;
  }

  getItemFromCart(id) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    let result = null;

    if (cartItems) {
      cartItems.forEach(item => {
        if (item.id === id) {
          result = item;
        }
      });
    }
    return result;
  }

  emptyCart() {
    localStorage.removeItem('cart');
  }

  addToCart(item) {
    const check = this.getItemFromCart(item.id);
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    if (!check) {
      if (cartItems) {
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        return;
      } else {
        const cart = [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    } else {
      return 'Item already in cart';
    }
  }

  getCartItems () {
    let cartItems = [];
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      cartItems = JSON.parse(localStorage.getItem('cart'));
    }
    return cartItems;
  }

  scrollToTop() {
    this.router.events.subscribe((evt) => {
      const body = $('html, body');
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      body.stop().animate({ scrollTop: 0 }, 500, 'swing');
    });
  }

  saveAllProducts(products){
    localStorage.setItem('allProducts',JSON.stringify(products));
  }
  // editProduct(product){
  // let  exi = [];
  //    exi = this.fetchAllProduct();
  //   exi.forEach((element,index) => {
  //     if(product.id===element.id){
  //       //remove that product
  //       exi.slice(index);
  //     }
  //   });
  //   //then push back to array
  //   this.addToProducts(product);
  // }
  // addToProducts(product){
  //   const exi = this.fetchAllProduct();
  //   exi.push(product);
  //   this.saveAllProducts(exi);
  // }

  // fetchAllProduct(){
  //  // return JSON.parse (localStorage.getItem('allProducts'));
  // }

  saveProduct(pro){
    localStorage.setItem('product',JSON.stringify(pro));
  }
  getProduct(){
    return JSON.parse(localStorage.getItem('product'));
  }

  getDate(d){
    
    var date = new Date(d);
    return date.toString();
  }
}

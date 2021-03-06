import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import Swal from "sweetalert2";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject } from "rxjs";

declare var $: any;

@Injectable({
  providedIn: "root"
})
export class UtilService {
  Toast: any;
  toggleLoading: any;
  toggleLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) {}

  getToken() {
    if (localStorage.getItem("token") != null) {
      return localStorage.getItem("token");
    }
  }

  getUserObject() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  setUserObject(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  toast(messageType: any, message: any) {
    this.Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000
    });
    this.Toast.fire({
      type: messageType,
      title: message
    });
  }

  dynamicToast(code,message){
    if(code===0){
      this.toast('success',message)
    }else{
      this.toast('warning',message);
    }
  }
  res = false;
  confirm(message) {
    Swal.fire({
      title: "Please confirm",
      text: message,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok"
    }).then(result => {
      console.log(result);
      return result.value;
    });
    return this.res;
  }

  getItemFromCart(id) {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
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
    localStorage.removeItem("cart");
  }

  addToCart(item) {
    const check = this.getItemFromCart(item.id);
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (!check) {
      if (cartItems) {
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        return;
      } else {
        const cart = [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      return "Item already in cart";
    }
  }

  getCartItems() {
    let cartItems = [];
    if (JSON.parse(localStorage.getItem("cart")) !== null) {
      cartItems = JSON.parse(localStorage.getItem("cart"));
    }
    return cartItems;
  }

  scrollToTop() {
    this.router.events.subscribe(evt => {
      const body = $("html, body");
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    });
  }

  saveAllProducts(products) {
    localStorage.setItem("allProducts", JSON.stringify(products));
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

  saveProduct(pro) {
    localStorage.setItem("product", JSON.stringify(pro));
  }
  getProduct() {
    return JSON.parse(localStorage.getItem("product"));
  }

  getDate(d) {
    var date = new Date(d);
    return date.toString();
  }

  hideLoading() {
    this.toggleLoading = true;
    return this.toggleLoadingSubject.next(false);
  }

  showLoading() {
    this.toggleLoading = false;
    return this.toggleLoadingSubject.next(true);
  }

  loadingState() {
    return this.toggleLoadingSubject;
  }
}

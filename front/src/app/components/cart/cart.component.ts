import { Component, OnInit } from '@angular/core';
import {CartService} from './../../services/cart-service.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  // AddCart(){
  //   this.cartService.createCart()
  // }

  cartAdd(){

  }

}

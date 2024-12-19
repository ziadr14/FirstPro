import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartServesService } from '../../Serves/cart-serves.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    this.getAllProduct()
  }
  cardProduct: any[] = []
  tatal:any = 0
  success:boolean = false

  constructor(private serv:CartServesService){}
  getAllProduct() {
    if ('card' in localStorage) {
      this.cardProduct = JSON.parse(localStorage.getItem('card')!)
    }
    this.getTotal()

  }
  deletItem(index:number){
    this.cardProduct.splice(index , 1)
    this.getTotal()

    localStorage.setItem("card" ,JSON.stringify(this.cardProduct) )
  }
  clearAllItem(){
    this.cardProduct =[]
    this.getTotal()

    localStorage.setItem("card" ,JSON.stringify(this.cardProduct) )
  }

  getTotal() {
    this.tatal = 0
    for (let x in this.cardProduct) {
      this.tatal += this.cardProduct[x].item.price * this.cardProduct[x].quantity
    }
  }

  addCard(){
    let product = this.cardProduct.map(item => {
      return {productId :item.item.id , quantity : item.quantity}
    })

    let model = {
      userId : 5,
      date : new Date() ,
      product : product
    }
    this.serv.createNewCard(model).subscribe((res) => {
      this.success = true
    })

  }
}

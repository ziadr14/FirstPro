import { Component, OnInit } from '@angular/core';
import { ProductServesService } from '../../Serves/product-serves.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SelectComponent } from '../select/select.component';
import { Product1Component } from '../product1/product1.component';
import { RouterLink } from '@angular/router';

@Component({

  selector: 'app-product',
  standalone: true,
  imports: [CommonModule , RouterLink , SpinnerComponent , SelectComponent , Product1Component],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product:any[] = []
  category:any[] = []
  cardProduct:any[] = []
  loading:boolean = false

  constructor(private apiPro:ProductServesService){}
  ngOnInit(): void {
    this.getProduct()
    this.getCat()
  }

  getProduct(){
    this.loading = true
    this.apiPro.getAllProduct().subscribe((res:any) => {
      this.loading = false
      this.product = res

    } , error => {
      alert("Error")
      this.loading = false
    })
  }


  getCat(){
    this.loading = true

    this.apiPro.getAllCat().subscribe((res:any) => {
      this.loading = false

      this.category = res
    } , error => {
      this.loading = false

      alert("Error")
    })
  }

  filterCat(event:any) {
    let value = event.target.value
    if(value == 'All'){
      this.getProduct()
    }else{

      this.getProCat(value)
    }
  }

  getProCat(keyword:string){
    this.loading = true

    this.apiPro.getProByCat(keyword).subscribe((res:any) => {
      this.loading = false
      this.product = res
    })
  }
  addToCard(event:any){
    if('card' in localStorage){
      this.cardProduct = JSON.parse(localStorage.getItem('card')!)
      let found = this.cardProduct.find(item => item.item.id == event.item.id)
      if(found){
        alert("item is already added")
      }
      else{

        this.cardProduct.push(event)
        localStorage.setItem('card', JSON.stringify(this.cardProduct))
      }
    }else{
      this.cardProduct.push(event)
      localStorage.setItem('card', JSON.stringify(this.cardProduct))
    }
  }

}

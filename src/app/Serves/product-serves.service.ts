import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServesService {

  constructor(private http:HttpClient) {

  }


  getAllProduct(){
    return this.http.get(`https://fakestoreapi.com/products`)
  }

  getAllCat(){
    return this.http.get(`https://fakestoreapi.com/products/categories`)
  }


  getProByCat(keyword:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }

  getProId(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}

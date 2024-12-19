import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServesService {

  constructor(private htttp:HttpClient) { }


  createNewCard(model:any){
    return this.htttp.post(`https://fakestoreapi.com/products` , model )
  }
}

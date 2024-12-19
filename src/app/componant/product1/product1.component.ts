import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component {

  @Input() data:any=[]
  @Output() item = new EventEmitter()


  addButton:boolean = false ;
  amunt:number = 0








  add(){
    this.item.emit({item:this.data , quantity: this.amunt})
  }

}

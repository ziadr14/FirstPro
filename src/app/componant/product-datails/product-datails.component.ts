import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServesService } from '../../Serves/product-serves.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-datails',
  standalone: true,
  imports: [SpinnerComponent , CommonModule],
  templateUrl: './product-datails.component.html',
  styleUrl: './product-datails.component.css'
})
export class ProductDatailsComponent implements OnInit {

  id:any
  data:any = {}
  loading:boolean = false

  constructor(private router : ActivatedRoute , private serves : ProductServesService){
    this.id = this.router.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getProdu()
    }

  getProdu(){
    this.loading = true
    this.serves.getProId(this.id).subscribe((res) => {
      this.loading = false
      this.data = res
    }, error => {
      this.loading=false
      alert("Error")
    })
  }



}

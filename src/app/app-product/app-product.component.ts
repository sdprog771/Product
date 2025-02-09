import {Component, Input, OnInit} from '@angular/core';
import {PRODUCT_DUMMY} from "../model/ProductDummy";
import {Product} from "../model/ProductInterface";


@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrl: './app-product.component.css'
})

export class AppProductComponent implements OnInit {

  products: Product[] = [];

  @Input({required: true}) product!: any

  ngOnInit() {
    this.products = PRODUCT_DUMMY;
    console.log(this.products);
  }


}

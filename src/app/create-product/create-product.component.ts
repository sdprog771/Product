import { Component } from '@angular/core';
import { Product} from "../model/ProductInterface";
import { ProductService} from "../productsService/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  product: Product[] = [];

  constructor(private productService: ProductService){}

  add(name: string, description: string, position: string): void {
    name = name.trim();
    description = description.trim();
    position = position.trim();

    if (!name) { return; }

    this.productService.addProduct({ name, description, position } as Product)
      .subscribe(product => {
        this.product.push(product);
      });
  }

  save(): void {
  }


}

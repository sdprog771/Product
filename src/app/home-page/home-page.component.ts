import {Component, Input} from '@angular/core';
import { ProductService } from "../productsService/product.service";
import { PRODUCT_DUMMY } from "../model/ProductDummy";
import {CATEGORY_DUMMY} from "../model/CategoryDummy";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  searchTokens: string[] = [];
  products = PRODUCT_DUMMY;
  categoryList = CATEGORY_DUMMY;
  hasTokens = false;

  constructor(private productService: ProductService) {
  }

  //to get filtered results
  getSearchTokens(searchInput: string) {
    return this.searchTokens = searchInput.split(" ");
  }

  show() {
    this.hasTokens = true;
  }

  // getAllProducts(): Product[] {
  //   this.productService.getProducts().subscribe(
  //     data => {
  //       if (data.length > 0) {
  //         console.log(data);
  //       }
  //     },
  //     error => {
  //       console.error("ERROR!!" + error);
  //     },
  //     () => {
  //       console.log("finished!!")
  //     }
  //   );

  //   this.productService.getProducts().subscribe({
  //     next: (data) => {
  //       console.log(data)
  //     },
  //     error: (error) => {
  //       console.error("ERROR!!" + error);
  //     },
  //     complete: () => {
  //       console.log("finished")
  //     }
  //   })
  //
  //   return [] as Product[];
  // }
}

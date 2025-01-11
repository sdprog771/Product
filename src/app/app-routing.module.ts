import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from "./create-product/create-product.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {FiltersComponent} from "./filters/filters.component";

const routes: Routes = [
  {path: "newProduct", component: CreateProductComponent},
  {path: "categories", component: CreateCategoryComponent},
  {path: "home", component: HomePageComponent},
  {path: "filters", component: FiltersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FiltersComponent } from './filters/filters.component';
import { NewCategoryModalComponent } from './new-category-modal/new-category-modal.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ResultsComponent } from './results/results.component';
import { AppProductComponent } from './app-product/app-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateProductComponent,
    CreateCategoryComponent,
    HomePageComponent,
    FiltersComponent,
    NewCategoryModalComponent,
    ResultsComponent,
    AppProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    //HomePageComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

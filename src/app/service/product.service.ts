import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "../message/message.service";
import { Product } from "../model/Product";
import {Observable, of} from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import * as http from "http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {
  }

  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }
  prodUrl = "/products/all";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable <any> {
    return this.httpClient.get(this.prodUrl,this.httpOptions).pipe(catchError(this.handleError<Product[]>('getProducts')));
  }

  getProductById(id: string): Observable<any> {

    const prodUrlById = `${this.prodUrl}/${id}`;

    return this.httpClient.get(prodUrlById)
                          .pipe(tap(_ => this.log(`fetched product id=${id}`)),
                                catchError(this.handleError<Product>(`getProduct id=`)));
  }

  updateProduct(product: Product): Observable<any> {

    return this.httpClient.put(this.prodUrl,product,this.httpOptions)
                          .pipe(tap(_ => this.log(`updated product id=`)),
                                catchError(this.handleError<any>('updateProduct')));
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.prodUrl, product, this.httpOptions)
                          .pipe(tap((newProduct: Product) => this.log(`added product w/ id=`)),
                                catchError(this.handleError<Product>('addProduct')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }


}

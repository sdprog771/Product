import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import { MessageService } from "../message/message.service";
import {Observable, of} from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import {GETALLPRODUCTSURL} from "../constants";
import { Product} from "../model/ProductInterface";

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


  getProducts(): Observable <any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //
    // let params: HttpParams = new HttpParams();
    // params = params.set('name', 'Ena onoma');

    // return this.httpClient.get(this.prodUrl,{headers: headers, params: params, responseType: "json"})
    return this.httpClient.get(GETALLPRODUCTSURL,{headers: headers, responseType: "json"})
      .pipe(catchError(this.handleError<Product[]>('getProducts')));
  }

  getProductById(id: string): Observable<any> {

    const prodUrlById = `${GETALLPRODUCTSURL}/${id}`;

    return this.httpClient.get(prodUrlById)
                          .pipe(tap(_ => this.log(`fetched product id=${id}`)),
                                catchError(this.handleError<Product>(`getProduct id=`)));
  }

  updateProduct(product: Product): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    let params: HttpParams = new HttpParams();
    params = params.set('name', 'Ena onoma');

    return this.httpClient.put(GETALLPRODUCTSURL,product)
                          .pipe(tap(_ => this.log(`updated product id=`)),
                                catchError(this.handleError<any>('updateProduct')));
  }

  addProduct(product: Product): Observable<Product> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    let params: HttpParams = new HttpParams();
    params = params.set('name', 'Ena onoma');

    return this.httpClient.post<Product>(GETALLPRODUCTSURL, product)
                          .pipe(tap(data => this.log("data")),
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

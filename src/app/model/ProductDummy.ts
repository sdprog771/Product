import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ProductDummy {

  data = {
    products: [
      {id: "PR0000001", name: "Σειρά κατσαβίδια ίσια-σταυροκατσάβιδα", description: "Τεμάχια 6", position: "ΚΑ0000001"},
      {id: "PR0000001", name: "Σειρά κλειδιά γαλλικά", description: "Σε Θήκη γκρι", position: "ΚΑ0000002"},
      {id: "PR0000001", name: "Τρυπάνι Bosch", description: "", position: "ΚΑ0000003"},
      {id: "PR0000001", name: "Λάστιχο νερού πράσινο", description: "15 μέτρσ", position: "ΚΑ0000004"},
      {id: "PR0000001", name: "Ψαλίδι κλαδέματος κόκκινο", description: "", position: "ΚΑ0000005"}
    ]
  }

  constructor (private http: HttpClient) {}

  getProducts (): Observable<any> {
    return of(this.data.products)
  }

}

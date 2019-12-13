import { Injectable } from '@angular/core';
import { Sellingproduct } from 'src/app/pages/dashboards/dashboard2/dashboard2.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = "http://localhost:8000/api/product";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Sellingproduct[]>(`${this.API_URL}`);
  }

  addProduct(data): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add-Product`, data )
            .pipe(map(product => {
                if (product ) {
                    console.log(product);                    
                }
                return product;
            }));
      
  }

  DeleteProduct(id): Observable<any> {
    var API_URL = `${this.API_URL}/delete-product/${id}`;
    return this.http.delete(API_URL);
  }

  UpdateProduct(id, data): Observable<any> {
    let API_URL = `${this.API_URL}/update-Product/${id}`;
    return this.http.put(API_URL, data);
      
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/pages/dashboards/dashboard3/dashboar3.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL: string = "http://localhost:8000/api/order";
  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>(`${this.API_URL}`);
  }

  addOrder(data): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add-Order`, data)
      .pipe(map(order => {
        if (order) {
          console.log(order);
        }
        return order;
      }));

  }

  DeleteOrder(id): Observable<any> {
    var API_URL = `${this.API_URL}/delete-Order/${id}`;
    return this.http.delete(API_URL);
  }

  UpdateOrder(id, data): Observable<any> {
    let API_URL = `${this.API_URL}/update-Order/${id}`;
    return this.http.put(API_URL, data);

  }

  totalOrder(): Observable<any> {
    let API_URL = `${this.API_URL}/total-Order`;
    return this.http.get(API_URL);
  }

  totalSalesAmount(): Observable<any> {
    let API_URL = `${this.API_URL}/total-selling-price`;
    return this.http.get(API_URL);
  }
  
}

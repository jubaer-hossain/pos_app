import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/pages/dashboards/dashboard4/dashboard4.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL: string = "http://localhost:8000/api/customer";
  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get<Customer[]>(`${this.API_URL}`);
  }

  addCustomer(data): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add-Customer`, data )
            .pipe(map(Customer => {
                if (Customer ) {
                    console.log(Customer);  
                }
                return Customer;
            }));
      
  }

  DeleteCustomer(id): Observable<any> {
    var API_URL = `${this.API_URL}/delete-Customer/${id}`;
    return this.http.delete(API_URL);
  }

  UpdateCustomer(id, data): Observable<any> {
    let API_URL = `${this.API_URL}/update-Customer/${id}`;
    return this.http.put(API_URL, data);
      
  }
}

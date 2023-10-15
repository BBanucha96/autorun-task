import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl =
    'https://my-json-server.typicode.com/BBanucha96/autorun-task';

  constructor(private http: HttpClient) {}

  /**
   * @returns array of all products
   */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/products`);
  }
}

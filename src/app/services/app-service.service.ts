import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  endpoint = 'http://localhost:3000/api';


  public get(url:string, options?:any) {
     return this.http.get(url, options);
  }
  public post(url:string, data:any, options?:any){
    return this.http.post(url, data, options)
  }
  public put(url:string, data:any, options?:any){
    return this.http.put(url, data, options);
  }
  public delete(url:string, options?:any){
    return this.http.delete(url, options)
  }

  getCategory() {
    return this.http.get(this.endpoint + '/category')
  }
  postProduct(data:any){
    return this.http.post(this.endpoint + '/products', data)
  }
  getProducts(){
    return this.http.get(this.endpoint + '/products')
  }
  updateProducts(id:any, data:any){
    return this.http.put(this.endpoint+ '/products' + id, data);
  }

}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
   data:any;
  constructor(
    private http: HttpClient,
    private appService: AppServiceService
  ) { }

  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts(){
    this.appService.getProducts()
    .subscribe(res => {
      console.log(res)
      this.data = res;
    });
  }

}

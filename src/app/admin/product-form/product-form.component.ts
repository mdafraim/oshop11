import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  populate:any
  id:any;
  product: any;
  keys: any;
  listOfData: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private appService: AppServiceService,
    private route: ActivatedRoute,
    private AppServiceService: AppServiceService
    
  ) { 
    
  }

  ngOnInit(): void {
    this.getDrop();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getCategory(this.id)
    }
  }

 


  getDrop(){
    this.appService.getCategory()
    .subscribe(res => {
      console.log(res)
      this.populate = res
    });
  }

  productSubmit(product:any) {
      this.appService.postProduct(product)
      .subscribe(res => {
       console.log(res)
       this.router.navigate(['/admin/products'])
   });
  }

  editProducts(id:any, product:any){
    this.appService.updateProducts(id, product)
    .subscribe(res => {
      console.log(res)
    })
  }

  getCategory(id:any){
    this.appService.getCategory()
    .subscribe(
      (res: any) => {
        let data:any = Object.keys(res);
        data.pop();
        data.shift();
        this.keys = data;
        this.listOfData = res;
        console.log(res);
        this.product.patchValue(this.listOfData);
      },
    );
  }

  }



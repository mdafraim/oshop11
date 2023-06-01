import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl!: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    handler: HttpBackend,
    ) { 
      this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/admin/products';
    }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get email(){
    return this.loginForm.get('email');
  };
  get password(){
    return this.loginForm.get('password');
  };

  submitForm(): void {
    this.http
      .post('http://localhost:3000/api/auth', this.loginForm.value)
      .subscribe(
        (res: any) => {
          let token: any = res.result.token;
          localStorage.setItem('token', token);
          this.router.navigateByUrl(this.returnUrl);
        },
        (error: any) => {
          console.log(error.error);
        }
      );
  }

}

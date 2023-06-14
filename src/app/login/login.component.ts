import { Component, OnInit, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from "@angular/router"

import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit { 
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  username = '';
  password = '';
  usernameFormControl = new FormControl(this.username, [Validators.required]);
  passwordFormControl = new FormControl(this.password, [Validators.required]);

  async onSubmit() {
    const res:any = await this.loginService.login(this.username, this.password);
    
    if(res.status === 200) {
      localStorage.setItem('token', res.data.token);
      this.router.navigate(['/dashboard']);
    }
  }
}

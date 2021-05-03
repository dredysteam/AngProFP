import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(private as:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.as.loginUser(email, password);
      this.router.navigate(['/']);
    } catch(err) {
      this.error = err.message;
    }
    
  }

}

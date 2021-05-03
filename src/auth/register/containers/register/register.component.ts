import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  constructor(private as: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.as.createUser(email, password);
      this.router.navigate(['/']);
    } catch(err) {
      this.error = err.message;
    }
    
  }

}

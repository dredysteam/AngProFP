import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      emai: ['', Validators.email],
      password:['',Validators.required]
    })
  }

ngOnInit(): void {
}
  
  onSubmit() {
    
  }

}

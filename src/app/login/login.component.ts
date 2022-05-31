import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public regForm: FormGroup = this._formBuilder.group({
       email : ['example@gmail.com', Validators.email],
       pass : [''],
       


  }, )
  constructor( private _formBuilder:  FormBuilder ) {}

  ngOnInit(): void {
  }

}

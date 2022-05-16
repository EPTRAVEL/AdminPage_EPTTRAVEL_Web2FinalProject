import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-capnhat',
  templateUrl: './capnhat.component.html',
  styleUrls: ['./capnhat.component.css']
})
export class CapnhatComponent implements OnInit {

  public regForm: FormGroup = this._formBuilder.group({
    tentour : ['', [Validators.required, Validators.minLength(3)]],
       matour : ['', Validators.required, Validators.minLength(7)],
       diemden : ['', Validators.required],
       confirmPass : ['']

  }, )
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

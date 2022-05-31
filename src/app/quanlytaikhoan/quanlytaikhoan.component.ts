import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-quanlytaikhoan',
  templateUrl: './quanlytaikhoan.component.html',
  styleUrls: ['./quanlytaikhoan.component.css']
})
export class QuanlytaikhoanComponent implements OnInit {
  userData: any;
  errorMsg: string = '';
 
  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this._service.getUsers().subscribe(
      {
        next: (data) => this.userData = data,
        error: (err) => this.errorMsg = err.message
      })
  }
}

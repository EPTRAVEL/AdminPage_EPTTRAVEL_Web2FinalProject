import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chitietkhachhang',
  templateUrl: './chitietkhachhang.component.html',
  styleUrls: ['./chitietkhachhang.component.css']
})
export class ChitietkhachhangComponent implements OnInit {
  userData: any;
  selectedUser: any;
  errorMsg: string = '';
  base_url: string = 'http://localhost:8000/avatar user/';
  constructor(private _service: UserService,  private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._activatedRoute.paramMap.subscribe(
      (param)=>{
        let userId = param.get('userId');
        if (userId !=null){
          this.selectedUser = userId;
        }
      }
    )  
    this.getUserId()
  }
  getUserId(){
    this._service.getUserById(this.selectedUser).subscribe(
      {
        next: (data) => this.userData = data,
        error: (err) => this.errorMsg = err.message
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTourService } from '../services/update-tour.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-capnhat',
  templateUrl: './capnhat.component.html',
  styleUrls: ['./capnhat.component.css']
})
export class CapnhatComponent implements OnInit {
  public tour: boolean = true;
  public tinTuc: boolean = false;
  public hinhAnh: boolean = false;


  allTour: any;
  errorMsg: string = '';
  selectTour() {
    this.tour = true;
    this.hinhAnh = false;
    this.tinTuc = false;
  }
  selectTinTuc() {
    this.tour = false;
    this.hinhAnh = false;
    this.tinTuc = true;
  }
  selectHinhAnh() {
    this.tour = false;
    this.hinhAnh = true;
    this.tinTuc = false;
  }



  public regForm: FormGroup = this._formBuilder.group({
    tentour: ['', [Validators.required, Validators.minLength(3)]],
    matour: ['', Validators.required, Validators.minLength(7)],
    diemden: ['', Validators.required],
    confirmPass: ['']

  })
  constructor(private _formBuilder: FormBuilder, private _service: UpdateTourService, private toastr: ToastrService) { }


  public tourForm: FormGroup = this._formBuilder.group({
    ten_tour: ['xxxx'],
    images: ['xxxx'],
    ma_tour: ['xxxx'],
    noikhoihanh: ['xxxx'],
    sochoconnhan: ['xxxx'],
    diemden: ['xxxx'],
    ngaykhoihanh: ['xxxx'],
    thoigian: ['xxxx'],
    noidungchitiet:['xxxx'],
    diadiemthamquan: ['xxxx'],
    phuongtiendichuyen: ['xxxx'],
    khachsan:['xxxx'],
    lichtrinh:['xxxx'],
    giatiennguoilon:['xxxx'],
    giatientreem: ['xxxx'],
    giatientrenho: ['xxxx'],
    giatienembe: ['xxxx'],
    quocgia: ['xxxx'],
    khuvuc: ['xxxx']
  })
  SubmitToUpdateTour(data: any) {

  }

  ngOnInit(): void {
    this.getAllTours()
  }
  showSuccess() {
    this.toastr.success('test oke Toastr rồi nè', 'Toastr fun!');
  }
  getAllTours() {
    this._service.getTours().subscribe(
      {
        next: (data) => this.allTour = data,
        error: (err) => this.errorMsg = err.message
      })
  }

}

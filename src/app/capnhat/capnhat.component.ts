import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTourService } from '../services/update-tour.service';
import { ToastrService } from 'ngx-toastr';
import { Tour } from '../interfaces/tour';
@Component({
  selector: 'app-capnhat',
  templateUrl: './capnhat.component.html',
  styleUrls: ['./capnhat.component.css']
})
export class CapnhatComponent implements OnInit {
  public tour: boolean = true;
  public tinTuc: boolean = false;
  public hinhAnh: boolean = false;
  tourImg: any = null;

  tour_item: any

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
  base_url: string = 'http://localhost:8000/tours/'

  public tourForm: FormGroup = this._formBuilder.group({
    ten_tour: ['xxxx'],
    ma_tour: ['xxxx'],
    noikhoihanh: ['xxxx'],
    sochoconnhan: ['xxxx'],
    diemden: ['xxxx'],
    ngaykhoihanh: ['xxxx'],
    thoigian: ['xxxx'],
    noidungchitiet: ['xxxx'],
    diadiemthamquan: ['xxxx'],
    phuongtiendichuyen: ['xxxx'],
    khachsan: ['xxxx'],
    lichtrinh: ['xxxx'],
    giatiennguoilon: ['xxxx'],
    giatientreem: ['xxxx'],
    giatientrenho: ['xxxx'],
    giatienembe: ['xxxx'],
    quocgia: ['xxxx'],
    khuvuc: ['xxxx']
  })
  SubmitToUpdateTour(data: any) {
    let formData = new FormData();
    formData.append('ten_tour', data.ten_tour);
    formData.append('ma_tour', data.ma_tour);
    formData.append('noikhoihanh', data.noikhoihanh);
    formData.append('sochoconnhan', data.sochoconnhan);
    formData.append('diemden', data.diemden);
    formData.append('ngaykhoihanh', data.ngaykhoihanh);
    formData.append('thoigian', data.thoigian);
    formData.append('noidungchitiet', data.noidungchitiet);
    formData.append('diadiemthamquan', data.diadiemthamquan);
    formData.append('phuongtiendichuyen', data.phuongtiendichuyen);
    formData.append('khachsan', data.khachsan);
    formData.append('lichtrinh', data.lichtrinh);
    formData.append('giatiennguoilon', data.giatiennguoilon);
    formData.append('giatientreem', data.giatientreem);
    formData.append('giatientrenho', data.giatientrenho);
    formData.append('giatienembe', data.giatienembe);
    formData.append('quocgia', data.quocgia);
    formData.append('khuvuc', data.khuvuc);


    for (let i = 0; i < this.tourImg.length; i++) {
      formData.append('tourImg', this.tourImg[i]);
    }
    // formData.append('tourImg', this.tourImg);

    console.log('FormData:', formData);

    this._service.uploadData(formData).subscribe({
      next: res => {
        console.log(res);
        this.toastr.success('Update Tour Success', 'Success!!!');
        this.getAllTours()
      },
      error: err => {
        console.log(err.message);
        this.toastr.error('False', 'False', {
          timeOut: 3000,
        });
      }
    })
  }

  ngOnInit(): void {
    this.getAllTours()
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.tourImg = event.target.files;
    } else {
      this.tourImg = null;
    }
  }


  removeTour(tour: any) {
    if (confirm('Bạn chắc chắn muốn xóa Tour: ' + tour.ten_tour + '?') == true) {
      this._service.removeTour(tour._id).subscribe((res) => {
        let res_data = JSON.parse(JSON.stringify(res));
        this.toastr.info('Xóa Tour ' + tour.ten_tour + ' Thành công', 'Toastr fun!');
        this.getAllTours();
      });
    }
  }

  editTour(tour: Tour) {
    this.tour_item = tour;
    this.tourForm = this._formBuilder.group(tour)
  }


  getAllTours() {
    this._service.getTours().subscribe(
      {
        next: (data) => this.allTour = data,
        error: (err) => this.errorMsg = err.message
      })
  }

}

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

  defaultForm: any = {
    ten_tour: [''],
    ma_tour: [''],
    noikhoihanh: [''],
    sochoconnhan: [''],
    diemden: [''],
    ngaykhoihanh: [''],
    thoigian: [''],
    noidungchitiet: [''],
    diadiemthamquan: [''],
    phuongtiendichuyen: [''],
    khachsan: [''],
    lichtrinh: [''],
    giatiennguoilon: [''],
    giatientreem: [''],
    giatientrenho: [''],
    giatienembe: [''],
    quocgia: [''],
    khuvuc: ['']
  }
  

  // tour_item: TourItem =  new TourItem();

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

  constructor(private _formBuilder: FormBuilder, private _service: UpdateTourService, private toastr: ToastrService) { }
  base_url: string = 'http://localhost:8000/tours/'

  public tourForm: FormGroup = this._formBuilder.group(this.defaultForm)
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

    if (this.tourImg != null || this.tourImg != undefined) {
      for (let i = 0; i < this.tourImg.length; i++) {
        formData.append('tourImg', this.tourImg[i]);
      }
    }

    if (data._id === '' || data._id === null || data._id === undefined) {
     


      // alert("xử lý thêm")

      this._service.uploadData(formData).subscribe({
        next: res => {
          console.log(res);
          this.toastr.success('Update Tour Success', 'Success!!!');
          this.getAllTours()
          this.tourForm = this._formBuilder.group(this.defaultForm)
        },
        error: err => {
          console.log(err.message);
          this.toastr.error('False', 'False', {
            timeOut: 3000,
          });
        }
      })
    }
    else {   
      // alert('xử lý update tour ' + data._id + data.ten_tour)
      this._service
        .updateTour(data._id, formData)
        .subscribe((res) => {
          let res_u = JSON.parse(JSON.stringify(res));
          if (res_u.message === 'Update success') {
            this.getAllTours()
            this.toastr.info('Update Thành Công', 'Thành công!');
            this.tourForm = this._formBuilder.group(this.defaultForm)
          } else {
            this.toastr.error('Update Thất Bại', 'Thất bại!');
          }   
        });
    }





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

  editTour(tour: any) {
    this.tourForm = this._formBuilder.group({
      _id: tour._id,
      ten_tour: tour.ten_tour,
      ma_tour: tour.ma_tour,
      noikhoihanh: tour.noikhoihanh,
      sochoconnhan: tour.sochoconnhan,
      diemden: tour.diemden,
      ngaykhoihanh: tour.ngaykhoihanh,
      thoigian: tour.thoigian,
      noidungchitiet: tour.noidungchitiet,
      diadiemthamquan: tour.diadiemthamquan,
      phuongtiendichuyen: tour.phuongtiendichuyen,
      khachsan: tour.khachsan,
      lichtrinh: tour.lichtrinh,
      giatiennguoilon: tour.giatiennguoilon,
      giatientreem: tour.giatientreem,
      giatientrenho: tour.giatientrenho,
      giatienembe: tour.giatienembe,
      quocgia: tour.quocgia,
      khuvuc: tour.khuvuc
    })

  }


  getAllTours() {
    this._service.getTours().subscribe(
      {
        next: (data) => this.allTour = data,
        error: (err) => this.errorMsg = err.message
      })
  }

}

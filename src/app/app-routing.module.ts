import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaidatComponent } from './caidat/caidat.component';
import { CapnhatComponent } from './capnhat/capnhat.component';
import { HoadonComponent } from './hoadon/hoadon.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { QuanlytaikhoanComponent } from './quanlytaikhoan/quanlytaikhoan.component';
import { ThongbaoComponent } from './thongbao/thongbao.component';
import { ThongkeComponent } from './thongke/thongke.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'thongke',
    component: ThongkeComponent,
  },
  {
    path: 'thongbao',
    component: ThongbaoComponent,
  },
  {
    path: 'quanlytaikhoan',
    component: QuanlytaikhoanComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'hoadon',
    component: HoadonComponent,
  },
  {
    path: 'capnhat',
    component: CapnhatComponent,
  },
  {
    path: 'caidat',
    component: CaidatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

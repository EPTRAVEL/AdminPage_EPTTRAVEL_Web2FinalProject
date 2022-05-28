import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { CapnhatComponent } from './capnhat/capnhat.component';
import { HoadonComponent } from './hoadon/hoadon.component';
import { QuanlytaikhoanComponent } from './quanlytaikhoan/quanlytaikhoan.component';
import { MessagesComponent } from './messages/messages.component';
import { ThongbaoComponent } from './thongbao/thongbao.component';
import { CaidatComponent } from './caidat/caidat.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ChitiethoadonComponent } from './chitiethoadon/chitiethoadon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThongkeComponent,
    CapnhatComponent,
    HoadonComponent,
    QuanlytaikhoanComponent,
    MessagesComponent,
    ThongbaoComponent,
    CaidatComponent,
    MenubarComponent,
    ChitiethoadonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

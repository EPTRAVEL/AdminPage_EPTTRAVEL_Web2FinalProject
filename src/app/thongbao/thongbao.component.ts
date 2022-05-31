import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongbao',
  templateUrl: './thongbao.component.html',
  styleUrls: ['./thongbao.component.css']
})
export class ThongbaoComponent implements OnInit {
  public all: boolean = true;
  public recent: boolean = false;
  public unread: boolean = false;

  selectAll() {
    this.all = true;
    this.recent = false;
    this.unread = false;
  }
  selectRecent() {
    this.all = false;
    this.recent = false;
    this.unread = true;
  }
  selectUnread() {
    this.all = false;
    this.recent = true;
    this.unread = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

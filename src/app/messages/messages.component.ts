import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public all: boolean = true;
  public personal: boolean = false;
  public unread: boolean = false;

  selectAll() {
    this.all = true;
    this.personal = false;
    this.unread = false;
  }
  selectPersonal() {
    this.all = false;
    this.personal = false;
    this.unread = true;
  }
  selectUnread() {
    this.all = false;
    this.personal = true;
    this.unread = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

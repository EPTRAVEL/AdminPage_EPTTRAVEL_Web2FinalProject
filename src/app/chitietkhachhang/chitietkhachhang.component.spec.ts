import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietkhachhangComponent } from './chitietkhachhang.component';

describe('ChitietkhachhangComponent', () => {
  let component: ChitietkhachhangComponent;
  let fixture: ComponentFixture<ChitietkhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietkhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

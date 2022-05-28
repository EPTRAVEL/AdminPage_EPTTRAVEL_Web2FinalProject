import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiethoadonComponent } from './chitiethoadon.component';

describe('ChitiethoadonComponent', () => {
  let component: ChitiethoadonComponent;
  let fixture: ComponentFixture<ChitiethoadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitiethoadonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitiethoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

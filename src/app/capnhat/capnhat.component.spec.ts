import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatComponent } from './capnhat.component';

describe('CapnhatComponent', () => {
  let component: CapnhatComponent;
  let fixture: ComponentFixture<CapnhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapnhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaidatComponent } from './caidat.component';

describe('CaidatComponent', () => {
  let component: CaidatComponent;
  let fixture: ComponentFixture<CaidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtAutoBrdrComponent } from './crt-auto-brdr.component';

describe('CrtAutoBrdrComponent', () => {
  let component: CrtAutoBrdrComponent;
  let fixture: ComponentFixture<CrtAutoBrdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtAutoBrdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtAutoBrdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

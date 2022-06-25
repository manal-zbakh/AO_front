import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtManuelBrdrComponent } from './crt-manuel-brdr.component';

describe('CrtManuelBrdrComponent', () => {
  let component: CrtManuelBrdrComponent;
  let fixture: ComponentFixture<CrtManuelBrdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtManuelBrdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtManuelBrdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

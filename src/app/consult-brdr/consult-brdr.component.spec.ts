import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBrdrComponent } from './consult-brdr.component';

describe('ConsultBrdrComponent', () => {
  let component: ConsultBrdrComponent;
  let fixture: ComponentFixture<ConsultBrdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultBrdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBrdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

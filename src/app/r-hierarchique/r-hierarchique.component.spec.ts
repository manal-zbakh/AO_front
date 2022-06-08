import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHierarchiqueComponent } from './r-hierarchique.component';

describe('RHierarchiqueComponent', () => {
  let component: RHierarchiqueComponent;
  let fixture: ComponentFixture<RHierarchiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHierarchiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RHierarchiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
